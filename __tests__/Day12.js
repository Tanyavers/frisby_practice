const frisby = require("frisby");

const COLLECTIONU_ID = "23667037-8288fcca-a5c4-4e95-a86c-d068908e9171";
const ENVIRONMENT_ID = "23667037-92f65480-4157-411e-bbb8-8af46fc1b0e6";
const BASE_URL = "https://postman-echo.com";


it("Status code is 200, authorisation success", () => {
    return frisby.setup({
        request: {
            headers: {
            "x-api-key": process.env.POSTMAN_SECRET_KEY,
            },
        },
    })
    .post(`${BASE_URL}/post`, {
        collectionId: COLLECTIONU_ID,
        environmentId: ENVIRONMENT_ID,
        workspaceId: process.env.POSTMAN_WORKSPACE_ID,
    })
    .expect("status", 200)
    .expect("json", "data", {
        collectionId: COLLECTIONU_ID,
        environmentId: ENVIRONMENT_ID,
        workspaceId: process.env.POSTMAN_WORKSPACE_ID,
    });
});