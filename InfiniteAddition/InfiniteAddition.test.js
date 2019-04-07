const indefiniteAdd = require("./InfiniteAdd");
test("adds 2 + 4 + 5 + 6 to equals 17", () => {
  expect(indefiniteAdd(2, 4, 5, 6)).toBe(17);
});
test("Empty arguments ", () => {
  expect(indefiniteAdd()).toEqual("No parameter should be empty");
});
test("One argument ", () => {
  expect(indefiniteAdd(2)).toBe(2);
});
test("One argument is array of number", () => {
  expect(indefiniteAdd([2, 3, 4], 2, 4, 9, 0)).toBe(24);
});
test("One argument is empty array", () => {
  expect(indefiniteAdd([], 2, 4, 9, 0)).toBe(15);
});
test("One argument is multidimensional array", () => {
  expect(indefiniteAdd([2, 3, [2, 4, 1]], 2, 4, 9, 0)).toBe(27);
});
