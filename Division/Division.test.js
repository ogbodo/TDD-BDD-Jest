const divide = require("./Division");

test("divide 4 / 4 to equals 1", () => {
  expect(divide(4, 4)).toBe(1);
});
test("Empty arguments ", () => {
  expect(divide()).toEqual("No parameter should be empty");
});
