const frisby = require("frisby");

const POSTMAN_API_KEY = "PMAK-649868198a69060031b9d505-80326b37dea6ef26416017edab34358c38";
const BASE_URL = "https://postman-echo.com";
const COLLECTIONU_UID = "649c499ddcbb33482c11adc6";

it("WebSockets", () => {
    return frisby.setup({
        request: {
          headers: {
            "x-api-key": POSTMAN_API_KEY
          },
        },
      })
      .get(`${BASE_URL}/get?collectionUid=${COLLECTIONU_UID}`)
      .expect("status", 200)
      .expect('json', 'args', {collectionUid: COLLECTIONU_UID});
});
