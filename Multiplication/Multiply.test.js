const multiply = require("./Multiply");

test("Multiply 2 * 4 to equals 8", () => {
  expect(multiply(2, 4)).toBe(8);
});
test("Empty arguments ", () => {
  expect(multiply()).toEqual("No parameter should be empty");
});
test("One Empty argument ", () => {
  expect(multiply(2)).toBe("No parameter should be empty");
});
test("One argument not number", () => {
  expect(multiply([], 2)).toBe("All Parameters should be number");
});
test("All arguments not number", () => {
  expect(multiply({}, [])).toBe("All Parameters should be number");
});
test("All arguments not number", () => {
  expect(multiply("9g", "6t")).toBe("All Parameters should be number");
});
