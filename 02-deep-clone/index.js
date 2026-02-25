export function deepClone(obj, seen = new WeakMap()) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (seen.has(obj)) return seen.get(obj);
  let copy;
  if (Array.isArray(obj)) {
    copy = [];
  } else if (obj instanceof Map) {
    copy = new Map();
    seen.set(obj, copy);
    obj.forEach((value, key) => {
      copy.set(deepClone(key, seen), deepClone(value, seen));
    });
    return copy;
  } else if (obj instanceof Set) {
    copy = new Set();
    seen.set(obj, copy);
    obj.forEach((value) => {
      copy.add(deepClone(value, seen));
    });
    return copy;
  } else if (obj instanceof Date) {
    copy = new Date(obj);
  } else if (obj instanceof RegExp) {
    copy = new RegExp(obj);
  } else {
    copy = Object.create(Object.getPrototypeOf(obj));
  }
  seen.set(obj, copy);
  for (const key in obj) {
    copy[key] = deepClone(obj[key], seen);
  }
  return copy;
}
