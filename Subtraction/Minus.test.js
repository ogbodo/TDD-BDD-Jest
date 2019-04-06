const minus = require("./minus");
test("minus 4 - 2 to equals 2", () => {
  expect(minus(4, 2)).toBe(2);
});
test("Empty arguments ", () => {
  expect(minus()).toEqual("No parameter should be empty");
});
test("One Empty argument ", () => {
  expect(minus(2)).toBe("All Parameters should be number");
});
test("One argument not number ", () => {
  expect(minus([], 2)).toBe("All Parameters should be number");
});
test("All arguments not number", () => {
  expect(minus("9g", "6t")).toBe("All Parameters should be number");
});
test("All arguments not number", () => {
  expect(minus({}, [])).toBe("All Parameters should be number");
});
test("All arguments not number", () => {
  expect(minus(function() {}, [])).toBe("All Parameters should be number");
});
test("More arguments than expected", () => {
  expect(minus(8, 4, 5)).toBe("More arguments than expected");
});
