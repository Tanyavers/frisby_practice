const frisby = require("frisby");

frisby.globalSetup({
    request: {
        headers: {"x-api-key": process.env.POSTMAN_SECRET_KEY}
    }
})

it("Add authorized key to header and get status 200", function () {
  return frisby.setup({
        request: {
            headers: {"x-api-key": process.env.POSTMAN_SECRET_KEY}
        }
    })
    .get("https://api.getpostman.com/collections")
    .expect("status", 200);
});

it("Add authorized key to query parameter and get status 200", function () {
    return frisby.setup({request: {headers: {"x-api-key": ""}}})
        .get(`https://api.getpostman.com/collections?apikey=${process.env.POSTMAN_SECRET_KEY}`)
        .expect("status", 200);
});

it("Get authorized key from globalSetup and get status 200", function () {
    return frisby.get("https://api.getpostman.com/collections")
        .expect("status", 200);
});
