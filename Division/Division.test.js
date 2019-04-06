const divide = require("./Division");

test("divide 4 / 4 to equals 1", () => {
  expect(divide(4, 4)).toBe(1);
});
test("Empty arguments ", () => {
  expect(divide()).toEqual("Both parameters are  empty");
});
test("One Empty argument ", () => {
  expect(divide(2)).toBe("No parameter should be empty");
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
