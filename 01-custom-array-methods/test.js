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

test("myForEach should produce the same side effects as native forEach", () => {
  const nativeResult = [];
  const myResult = [];
  arr.forEach((x) => nativeResult.push(x * 2));
  arr.myForEach((x) => myResult.push(x * 2));
  expect(myResult).toEqual(nativeResult);
});

test("myFind should return the same result as native find", () => {
  expect(arr.myFind((x) => x > 4)).toEqual(arr.find((x) => x > 4));
});

test("myFindIndex should return the same result as native findIndex", () => {
  expect(arr.myFindIndex((x) => x > 4)).toEqual(arr.findIndex((x) => x > 4));
});

test("myFlat should return the same result as native flat", () => {
  const nested = [1, [2, 3], [4, [5, 6]]];
  expect(nested.myFlat(2)).toEqual(nested.flat(2));
});

test("myFlatMap should return the same result as native flatMap", () => {
  expect(arr.myFlatMap((x) => [x, x * 2])).toEqual(
    arr.flatMap((x) => [x, x * 2]),
  );
});
