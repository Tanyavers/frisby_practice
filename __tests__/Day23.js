const frisby = require("frisby");
const fs = require("fs");

const URL = "https://postman-echo.com";
const FILE_PATH = __dirname + "/../geoMap.csv";

it("Geo Map file", async () => {
    const fileData = fs.readFileSync(FILE_PATH, "utf8");
    const rows = fileData.split("\n");

    for (let i = 1; i < rows.length; i++) {
      const [region, boba] = rows[i].split(",");
      await frisby.get(`${URL}/get?${region}=${boba}`)
        .expect("status", 200);
    }
}, 60_000);
