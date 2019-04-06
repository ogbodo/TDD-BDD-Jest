const str = require("./concat");
test("concatinate Izu and chukwu to equals Izuchukwu", () => {
  expect(str("Izu", "chukwu")).toBe("Izuchukwu");
});
