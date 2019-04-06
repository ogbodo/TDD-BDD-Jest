const multiply = require("./Multiply");

test("Multiply 2 * 4 to equals 8", () => {
  expect(multiply(2, 4)).toBe(8);
});
test("Empty arguments ", () => {
  expect(multiply()).toEqual("No parameter should be empty");
});
