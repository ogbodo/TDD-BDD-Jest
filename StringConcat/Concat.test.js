const str = require("./concat");
test("concatinate Izu and chukwu to equals Izuchukwu", () => {
  expect(str("Izu", "chukwu")).toBe("Izuchukwu");
});
test("Empty arguments ", () => {
  expect(str()).toEqual("No parameter should be empty");
});
test("One Empty argument ", () => {
  expect(str("Izu")).toBe("All Parameters should be string");
});
test("both arguments are numbers", () => {
  expect(str(2, 4)).toBe("All Parameters should be string");
});
