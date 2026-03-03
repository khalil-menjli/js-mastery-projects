export class MyEventEmitter {
  constructor() {
    this.map = new Map();
    this.limit = 10;
  }

  on(event, listener) {
    const listeners = this.map.get(event) || [];
    listeners.push(listener);
    if (listeners.length > this.limit) {
      console.warn(
        `Warning: possible memory leak, more than ${this.limit} listeners added for event "${event}"`,
      );
    }
    this.map.set(event, listeners);
    return this;
  }

  off(event, listener) {
    let listeners = this.map.get(event);
    if (!listeners) return this;

    const index = listeners.indexOf(listener);
    if (index !== -1) {
      listeners.splice(index, 1);
    }
    if (listeners.length === 0) {
      this.map.delete(event);
    }
    return this;
  }

  emit(event, ...args) {
    let exact = this.map.get(event) || [];
    let listeners = [...exact];
    if (event.includes(":")) {
      let namespaced = event.split(":")[0] + ":*";
      let wildcard = this.map.get(namespaced) || [];
      listeners.push(...wildcard);
    }

    listeners.forEach((listener) => {
      listener(...args);
    });
    return this;
  }

  once(event, listener) {
    const wrapper = (...args) => {
      listener(...args);
      this.off(event, wrapper);
    };
    this.on(event, wrapper);
    return this;
  }

  listenerCount(event) {
    return this.map.get(event)?.length || 0;
  }

  eventNames() {
    return [...this.map.keys()];
  }

  setMaxListeners(n) {
    this.limit = n;
    return this;
  }
}
