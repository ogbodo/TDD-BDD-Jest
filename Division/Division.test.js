const divide = require("./Division");

test("divide 4 / 4 to equals 1", () => {
  expect(divide(4, 4)).toBe(1);
});
test("Empty arguments ", () => {
  expect(divide()).toEqual("No parameter should be empty");
});
test("One Empty argument ", () => {
  expect(divide(2)).toBe("All Parameters should be number");
});
test("One argument not number", () => {
  expect(divide([], 2)).toBe("All Parameters should be number");
});
test("All arguments not number", () => {
  expect(divide({}, [])).toBe("All Parameters should be number");
});
test("All arguments not number", () => {
  expect(divide("9g", "6t")).toBe("All Parameters should be number");
});
test("divide 0 / 4 to equals 0", () => {
  expect(divide(0, 4)).toBe(0);
});
test("divide 4 / 0 to return denominator cannot be zero", () => {
  expect(divide(4, 0)).toBe("Denominator cannot be zero");
});
test("the case of null arguments", () => {
  expect(divide(null, 5)).toBe("All Parameters should be number");
});
test("divide 0 / 0 to return denominator cannot be zero", () => {
  expect(divide(0, 0)).toBe("Denominator cannot be zero");
});
