const frisby = require("frisby");

it("Status code is 200", function () {
    return frisby.get("https://icanhazdadjoke.com/")
      .expect("status", 200);
});

//skip test because it should be fail
it.skip("Expected a 404", function () {
    return frisby.get("https://icanhazdadjoke.com/")
      .expect("status", 404);
});
