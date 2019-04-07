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
  expect(indefiniteAdd([2, 3, [2, 4, [1, [3, 4, 5]]]], 2, 4, 9, 0)).toBe(39);
  expect(
    indefiniteAdd([2, [3, [1, 4, 50]], [2, 4, [1, [3, 4, 5]]]], 2, 4, 9, 0)
  ).toBe(94);
});
test("One argument is an object", () => {
  expect(indefiniteAdd({}, 2, 4, 9, 0)).toBe(15);
  expect(indefiniteAdd({ "1": 1, "2": 2 }, 2, 4, 9, 0)).toBe(18);
});
test("One argument is null", () => {
  expect(indefiniteAdd(null, 2, 4, 9, 0)).toBe(15);
});
test("One argument is an object with array as a property", () => {
  expect(indefiniteAdd({ "1": 1, "2": 2, array: [] }, 2, 4, 9, 0)).toBe(18);
});
test("One argument is an object with array as a property having object as an element", () => {
  expect(
    indefiniteAdd({ "1": 1, "2": 2, array: [{ one: 1, two: 2 }] }, 2, 4, 9, 0)
  ).toBe(21);
  expect(
    indefiniteAdd(
      { "1": 1, "2": 2, array: [{ one: 1, two: 2, array: [] }] },
      2,
      4,
      9,
      0
    )
  ).toBe(21);
  expect(
    indefiniteAdd(
      {
        "1": 1,
        "2": 2,
        array: [{ one: 1, null: null, two: 2, array: [1, 2, null, 3] }]
      },
      2,
      4,
      9,
      0,
      null
    )
  ).toBe(27);
});
