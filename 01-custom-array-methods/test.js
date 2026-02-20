import "./index.js";
const arr = [1, 2, 3, 4, 5, 6, 8, 9];
test("myMap should return the same result as native map", () => {
  expect(arr.myMap((x) => x * 3)).toEqual(arr.map((x) => x * 3));
});

test("myFiltre should return the same result as native map", () => {
  expect(arr.myFilter((x) => x > 2)).toEqual(arr.filter((x) => x > 2));
});

test("myReduce should return the same result as native map", () => {
  expect(
    arr.myReduce((x, y) => {
      return x * 3 * y;
    }, 1),
  ).toEqual(
    arr.reduce((x, y) => {
      return x * 3 * y;
    }, 1),
  );
});

test("mySome should return the same result as native map", () => {
  expect(arr.mySome((x) => x > 3)).toEqual(arr.some((x) => x > 3));
});

test("myEvery should return the same result as native map", () => {
  expect(arr.myEvery((x) => x > 33)).toEqual(arr.every((x) => x > 33));
});
