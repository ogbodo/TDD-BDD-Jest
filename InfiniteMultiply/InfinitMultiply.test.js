const indefiniteMultiply = require("./InfiniteTimes");
test("Multiply 2 * 4 * 5 * 1 to equals 40", () => {
  expect(indefiniteMultiply(2, 4, 5, 1)).toBe(40);
});
test("Empty arguments ", () => {
  expect(indefiniteMultiply()).toEqual(" parameter should not be empty");
});
