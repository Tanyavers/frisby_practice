const frisby = require('frisby');

const coindeskBaseUrl = "https://api.coindesk.com";
const currency = ["btc", "usd"];

it('Request with coindeskBaseUrl variable and get status 200', function () {
  return frisby.get(`${coindeskBaseUrl}/v1/bpi/currentprice/btc.json`)
    .expect('status', 200);
});

currency.forEach((c) => {
    it(`Request with coindeskBaseUrl and ${c} variables and get status 200`, function () {
        return frisby.get(`${coindeskBaseUrl}/v1/bpi/currentprice/${c}.json`)
          .expect('status', 200);
    });
})
