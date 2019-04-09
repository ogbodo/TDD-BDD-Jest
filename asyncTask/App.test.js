const { getUserName } = require("./App");

test("returns the user repo", () => {
  getUserName("ogbodo").then(function(username) {
    expect(username).toBe("ogbodo");
  });
});
