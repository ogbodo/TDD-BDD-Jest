const indefiniteMultiply = require("./InfiniteTimes");
test("Multiply 2 * 4 * 5 * 1 to equals 40", () => {
  expect(indefiniteMultiply(2, 4, 5, 1)).toBe(40);
});
test("Empty arguments ", () => {
  expect(indefiniteMultiply()).toEqual(" parameter should not be empty");
});
test("One argument ", () => {
  expect(indefiniteMultiply(2)).toBe(2);
});
test("One argument is array of number", () => {
  expect(indefiniteMultiply([2, 3, 1], 2, 1, 1, 2)).toBe(24);
});
test("One argument is empty array", () => {
  expect(indefiniteMultiply([], 2, 4, 8, 1)).toBe(64);
});
test("One argument is multidimensional array", () => {
  expect(indefiniteMultiply([1, 1, [2, 1, 1]], 2, 4, 8, 1)).toBe(128);
  expect(indefiniteMultiply([2, 1, [2, 1, [1, [3, 1, 1]]]], 2, 2, 2, 1)).toBe(
    96
  );
  expect(
    indefiniteMultiply([1, [1, [1, 2, 1]], [2, 1, [1, [1, 2, 1]]]], 2, 1, 1, 1)
  ).toBe(16);
});
test("One argument is an object", () => {
  expect(indefiniteMultiply({}, 2, 4, 8, 1)).toBe(64);
});
test("One argument is null", () => {
  expect(indefiniteMultiply(null, 2, 4, 8, 1)).toBe(64);
});
test("One argument is an object with array as a property", () => {
  expect(indefiniteMultiply({ "1": 1, "2": 2, array: [] }, 2, 4, 8, 1)).toBe(
    128
  );
});

test("One argument is an object with array as a property having object as an element", () => {
  expect(
    indefiniteMultiply(
      { "1": 1, "2": 2, array: [{ one: 1, two: 2 }] },
      2,
      4,
      8,
      1
    )
  ).toBe(256);
  expect(
    indefiniteMultiply(
      { "1": 1, "2": 2, array: [{ one: 1, two: 2, array: [] }] },
      2,
      4,
      8,
      1
    )
  ).toBe(256);
  expect(
    indefiniteMultiply(
      {
        "1": 1,
        "2": 2,
        array: [{ one: 1, null: null, two: 2, array: [1, 2, null, 1] }]
      },
      2,
      1,
      8,
      1,
      null
    )
  ).toBe(128);
});
