import { deepClone } from "./index.js";

describe("deepClone", () => {
  describe("primitives", () => {
    test("returns numbers as-is without cloning", () => {
      expect(deepClone(5)).toBe(5);
    });
    test("returns null as-is without cloning", () => {
      expect(deepClone(null)).toBe(null);
    });
    test("returns strings as-is without cloning", () => {
      expect(deepClone("hi")).toBe("hi");
    });
  });

  describe("arrays", () => {
    test("clones an array and ensures no shared references", () => {
      const arr = [{ a: 2 }, 1, 2, 3, 4, 5, 6];
      const clone = deepClone(arr);
      expect(clone).not.toBe(arr);
      expect(clone).toEqual(arr);
      expect(clone[0]).not.toBe(arr[0]);
      expect(clone[0]).toEqual(arr[0]);
    });
  });

  describe("Map", () => {
    test("clones a Map and ensures no shared references", () => {
      const map = new Map();
      map.set("self", map);
      map.set("a", 1);
      map.set("b", 1);
      const clone = deepClone(map);
      expect(clone).not.toBe(map);
      expect(clone).toEqual(map);
    });
  });

  describe("Set", () => {
    test("clones a Set and ensures no shared references", () => {
      const set = new Set();
      set.add(set);
      set.add(1);
      const clone = deepClone(set);
      expect(clone).not.toBe(set);
      expect(clone).toEqual(set);
    });
  });

  describe("circular references", () => {
    test("handles circular references in plain objects", () => {
      const obj = { a: 1 };
      obj.self = obj;
      const clone = deepClone(obj);
      expect(clone).not.toBe(obj);
      expect(clone.self).toBe(clone);
    });
  });
});