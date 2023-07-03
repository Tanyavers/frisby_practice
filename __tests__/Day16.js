const frisby = require("frisby");

jest.setTimeout(20_000);

it("Listing web pages", async () => {
    let page = 0;
    let status = 200;

    while (status == 200) {
      page++;
      const response = await frisby.get(`http://xkcd.com/${page}/info.0.json`);
      status = response.status;
    }
    console.log(page);
    expect(page).toEqual(404);
});