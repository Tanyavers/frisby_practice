const frisby = require("frisby");

const POSTMAN_API_KEY = "PMAK-649868198a69060031b9d505-80326b37dea6ef26416017edab34358c38";
const API_ID = "e0556ce7-d330-4b21-821f-307df94b443b";

it("Submit API", () => {
    return frisby
        .setup({
        request: {
            headers: {
                "x-api-key": POSTMAN_API_KEY
            },
        }})
        .get(`https://api.getpostman.com/apis/${API_ID}`)
        .expect("status", 200)
        .expect('json', 'api', {
            name : "Cosmos"
        });
});
