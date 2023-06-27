const frisby = require("frisby");

const COINDESK_BASE_URL = "https://api.coindesk.com";
const currency = ["btc", "usd"];

it("Request with coindeskBaseUrl variable and get status 200", function () {
  return frisby.get(`${COINDESK_BASE_URL}/v1/bpi/currentprice/btc.json`)
    .expect("status", 200)
    .expect("bodyContains", "BTC");
});

currency.forEach((c) => {
    it(`Request with coindeskBaseUrl and ${c} variables and get status 200`, function () {
        return frisby.get(`${COINDESK_BASE_URL}/v1/bpi/currentprice/${c}.json`)
          .expect("status", 200)
          .expect("bodyContains", c.toUpperCase());
    });
})
