const { getUserName } = require("./App");

test("returns the user repo", () => {
  getUserName("ogbodo").then(function(repos) {
    console.log(repos.length);
    expect(repos["owner"].login).toBe("ogbodo");
  });
});
