const add = require("./Add");

test("adds 2 + 4 to equals 6", () => {
  expect(add(2, 4)).toBe(6);
});
