const frisby = require("frisby");

const POSTMAN_API_KEY = "PMAK-649868198a69060031b9d505-80326b37dea6ef26416017edab34358c38";
const COLLECTIONU_ID = "23667037-8288fcca-a5c4-4e95-a86c-d068908e9171";
const ENVIRONMENT_ID = "23667037-92f65480-4157-411e-bbb8-8af46fc1b0e6";
const WORKSPACE_ID = "c67ea2d8-0f47-4736-a760-5e44564529b9";
const BASE_URL = "https://postman-echo.com";


it("Status code is 200, authorisation success", () => {
    return frisby.setup({
        request: {
            headers: {
            "x-api-key": POSTMAN_API_KEY,
            },
        },
    })
    .post(`${BASE_URL}/post`, {
        collectionId: COLLECTIONU_ID,
        environmentId: ENVIRONMENT_ID,
        workspaceId: WORKSPACE_ID,
    })
    .expect("status", 200)
    .expect("json", "data", {
        collectionId: COLLECTIONU_ID,
        environmentId: ENVIRONMENT_ID,
        workspaceId: WORKSPACE_ID,
    });
});