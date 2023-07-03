const frisby = require("frisby");

const POSTMAN_API_KEY = "PMAK-649868198a69060031b9d505-80326b37dea6ef26416017edab34358c38";
const COLLECTIONU_UID = "23667037-25314aac-8be5-4228-82ba-8ff0f684e380";
const BASE_URL = "https://api.getpostman.com/collections";


it("Documentation", async () => {
    return frisby.setup({
        request: {
          headers: {
            "x-api-key": POSTMAN_API_KEY,
          },
        },
      })
      .get(`${BASE_URL}/${COLLECTIONU_UID}`)
      .expect("status", 200)
      .then((res) => {
        const collection = res.json.collection;
        const request = collection.item[0].item[0];
        
        expect(collection.info.name).toEqual("Day 20: Documentation");
        expect(request.request.description).not.toEqual("");
        expect(request.request.url.query).not.toEqual("");
        expect(request.request.header).not.toEqual("");
      })
    
});
