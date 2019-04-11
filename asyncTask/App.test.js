const { getUserName } = require("./App");

test("returns the user repo", () => {
  getUserName("ogbodo").then(function(repos) {
    expect(repos["owner"].login).toBe("ogbodo");
  });
});
