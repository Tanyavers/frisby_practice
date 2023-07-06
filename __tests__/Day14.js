const frisby = require("frisby");

it.skip("Get github repositories", () => {
    return frisby.fetch("https://api.github.com/user/repos", {
        headers: { Authorization: `Bearer ${process.env.POSTMAN_GITHUB_AUTH_TOKEN}` },
      })
      .expect("status", 200)
      .then((res) => {
        console.log(res.json.length);
      });
});
