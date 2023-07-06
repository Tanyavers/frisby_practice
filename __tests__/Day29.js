const frisby = require("frisby");

const COLLECTIONU_UID = "23667037-89008f41-1848-40cb-9003-827818a390b7";
const BASE_URL = "https://api.getpostman.com/collections";

it("Submit", async () => {
    return frisby.setup({
            request: {
                headers: {
                    "x-api-key": process.env.POSTMAN_SECRET_KEY,
                },
            },
        })
        .get(`${BASE_URL}/${COLLECTIONU_UID}`)
        .expect("status", 200)
        .then((res) => {
            const collection = res.json.collection;
            const folder = collection.item.find((fol) => fol.name === "Webhooks");
            expect(collection.info.name).toBe("Day 29: Webhooks");
            expect(folder.item.length).toBe(3);

            const echoRequest = folder.item.find((req) => req.name === "echo");
            expect(echoRequest.name).toBe("echo");
            expect(echoRequest.request.method).toBe("POST");
            expect(echoRequest.request.url.raw).toContain("https://postman-echo.com/post");

            const createWebhookRequest = folder.item.find((req) => req.name.includes("Create Webhook"));
            expect(createWebhookRequest.name).toContain("Create Webhook");
            expect(createWebhookRequest.request.method).toBe("POST");
            expect(createWebhookRequest.request.url.raw).toContain("https://api.getpostman.com/webhooks");

            const triggerWebhoolRequest = folder.item.find((req) => req.name === "Trigger Webhook");
            expect(triggerWebhoolRequest.name).toBe("Trigger Webhook");
            expect(triggerWebhoolRequest.request.method).toBe("POST");
            expect(triggerWebhoolRequest.request.url.raw).toContain("https://newman-api.getpostman.com/run");

            expect(echoRequest.request.body.raw).toBe("{{newPayload}}");

            const preReq = echoRequest.event.find((event) => event.listen === "prerequest");
            expect(preReq.script.exec.toString()).toContain("globals.previousRequest");
            expect(preReq.script.exec.toString()).toContain("pm.collectionVariables.set");

            const test = echoRequest.event.find((event) => event.listen === "test");
            expect(test.script.exec.toString()).toContain("pm.test");
            expect(test.script.exec.toString()).toContain("postman.setNextRequest(null)");
            expect(test.script.exec.toString()).toContain("console.log");

            expect(triggerWebhoolRequest.request.body.raw.toString()).toContain("message");
        });  
});