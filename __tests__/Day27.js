const frisby = require("frisby");

const URL = "http://security.postman-breakable.com";
const USERNAME = "tanya9";
const PASSWORD = "tanya9pass";


it("User", async () => {
    const userLogged = await frisby
        .post(`${URL}/user/login`, {
            body: {
                username: USERNAME,
                password: PASSWORD,
            }
        })
        .expect("status", 200);

    const sessionToken = userLogged.json.response.session_token;
    const userId = userLogged.json.response.user_id;

    await frisby
        .get(`${URL}/user`, {
            headers: {
                "x-api-key": sessionToken,
            },
        })
        .expect("status", 200);

    await frisby
        .get(`${URL}/account/${userId}/summary`, {
            headers: {
                "x-api-key": sessionToken,
            },
        })
        .expect("status", 200);

    await frisby
        .get(`${URL}/user/logout`, {
            headers: {
                "x-api-key": sessionToken,
            },
        })
        .expect("status", 200);

    await frisby
        .get(`${URL}/account/${userId}/summary`)
        .expect("status", 403);
}, 20_000);
