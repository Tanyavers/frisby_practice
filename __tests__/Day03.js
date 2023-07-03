const frisby = require("frisby");

const BASE_URL = "https://postman-echo.com";

it("Status code is 200", function () {
  return frisby.post(`${BASE_URL}/post`)
    .expect("status", 200);
});

it("Request except two query parameters", function () {  
    return frisby.post(`${BASE_URL}/post`, {"data": "doodles"})
        .expect("json", "data", {
            "data": "doodles"
        });
});
