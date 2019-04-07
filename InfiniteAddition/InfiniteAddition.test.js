const indefiniteAdd = require("./InfiniteAdd");
test("adds 2 + 4 + 5 + 6 to equals 17", () => {
  expect(indefiniteAdd(2, 4, 5, 6)).toBe(17);
});
