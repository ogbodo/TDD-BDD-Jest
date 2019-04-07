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
