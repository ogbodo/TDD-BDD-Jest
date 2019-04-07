const indefiniteMultiply = require("./InfiniteTimes");
test("Multiply 2 * 4 * 5 * 1 to equals 40", () => {
  expect(indefiniteMultiply(2, 4, 5, 1)).toBe(40);
});
test("Empty arguments ", () => {
  expect(indefiniteMultiply()).toEqual(" parameter should not be empty");
});
test("One argument ", () => {
  expect(indefiniteMultiply(2)).toBe(2);
});
test("One argument is array of number", () => {
  expect(indefiniteMultiply([2, 3, 1], 2, 1, 1, 2)).toBe(24);
});
test("One argument is empty array", () => {
  expect(indefiniteMultiply([], 2, 4, 8, 1)).toBe(64);
});
test("One argument is multidimensional array", () => {
  expect(indefiniteMultiply([1, 1, [2, 1, 1]], 2, 4, 8, 1)).toBe(128);
  expect(indefiniteMultiply([2, 1, [2, 1, [1, [3, 1, 1]]]], 2, 2, 2, 1)).toBe(
    96
  );
  expect(
    indefiniteMultiply([1, [1, [1, 2, 1]], [2, 1, [1, [1, 2, 1]]]], 2, 1, 1, 1)
  ).toBe(16);
});
test("One argument is an object", () => {
  expect(indefiniteMultiply({}, 2, 4, 8, 0)).toBe(64);
});
