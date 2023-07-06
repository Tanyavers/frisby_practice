const frisby = require("frisby");

it.skip("Listing web pages", async () => {
    let page = 0;
    let status = 200;

    while (status == 200) {
      page++;
      const response = await frisby.get(`http://xkcd.com/${page}/info.0.json`, {timeout: 15_000});
      status = response.status;
    }
    console.log(page);
    expect(page).toEqual(404);
}, 30_000);