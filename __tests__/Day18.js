const frisby = require("frisby");

const API_ID = "e0556ce7-d330-4b21-821f-307df94b443b";

it("Submit API", () => {
    return frisby
        .setup({
        request: {
            headers: {
                "x-api-key": process.env.POSTMAN_SECRET_KEY
            },
        }})
        .get(`https://api.getpostman.com/apis/${API_ID}`)
        .expect("status", 200)
        .expect('json', 'api', {
            name : "Cosmos"
        });
});
