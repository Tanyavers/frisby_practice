const frisby = require("frisby");

const BASE_URL = "https://postman-echo.com";
const COLLECTIONU_UID = "649c499ddcbb33482c11adc6";

it("WebSockets", () => {
    return frisby.setup({
        request: {
          headers: {
            "x-api-key": process.env.POSTMAN_SECRET_KEY
          },
        },
      })
      .get(`${BASE_URL}/get?collectionUid=${COLLECTIONU_UID}`)
      .expect("status", 200)
      .expect('json', 'args', {collectionUid: COLLECTIONU_UID});
});
