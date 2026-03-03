import { MyEventEmitter } from "./index.js";

describe("MyEventEmitter", () => {
  test("on and emit functions test", () => {
    let emitter = new MyEventEmitter();
    let called = false;
    emitter.on("test", () => {
      called = true;
    });
    emitter.emit("test");
    expect(called).toBe(true);
  });

  test("emit passes arguments to listeners", () => {
    let emitter = new MyEventEmitter();

    let result = 0;
    emitter.on("test", (val) => {
      result = val;
    });
    emitter.emit("test", 42);
    expect(result).toBe(42);
  });
  test("listenerCount returns correct number of listeners", () => {
    let emitter = new MyEventEmitter();
    emitter.on("test", () => {
      return "listenerCount test 1";
    });
    emitter.on("test", () => {
      return "listenerCount test 2";
    });
    emitter.on("test", () => {
      return "listenerCount test 3";
    });
    expect(emitter.listenerCount("test")).toBe(3);
  });

  test("once  function test", () => {
    let emitter = new MyEventEmitter();
    emitter.once("test", () => {
      return;
    });
    emitter.emit("test");
    expect(emitter.listenerCount("test")).toBe(0);
  });
  test("off  function test", () => {
    let emitter = new MyEventEmitter();
    const fn = () => "Hello";
    emitter.on("test", fn);
    emitter.off("test", fn);
    expect(emitter.listenerCount("test")).toBe(0);
  });

  test("wildcard listeners receive emitted arguments", () => {
    let emitter = new MyEventEmitter();
    let result = 0;
    emitter.on("test:*", (val) => {
      result = val;
    });
    emitter.emit("test:login", 42);
    expect(result).toBe(42);
  });
});
