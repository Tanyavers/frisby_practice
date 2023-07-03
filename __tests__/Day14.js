const frisby = require("frisby");
const TOKEN = "2cebb5c65f06eadc6ce845a6213eb3423cc2b200";


it.skip("Get github repositories", () => {
    return frisby.fetch("https://api.github.com/user/repos", {
        headers: { Authorization: `Bearer ${TOKEN}` },
      })
      .expect("status", 200)
      .then((res) => {
        console.log(res.json.length);
      });
});
