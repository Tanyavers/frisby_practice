const frisby = require('frisby');

frisby.globalSetup({
    request: {
        headers: {'x-api-key': "PMAK-649868198a69060031b9d505-80326b37dea6ef26416017edab34358c38"}
    }
})

it('Add authorized key to header and get status 200', function () {
  return frisby.setup({
        request: {
            headers: {'x-api-key': "PMAK-649868198a69060031b9d505-80326b37dea6ef26416017edab34358c38"}
        }
    })
    .get("https://api.getpostman.com/collections")
    .expect('status', 200);
});

it('Add authorized key to query parameter and get status 200', function () {
    return frisby.setup({request: {headers: {'x-api-key': ""}}})
        .get("https://api.getpostman.com/collections?apikey=PMAK-649868198a69060031b9d505-80326b37dea6ef26416017edab34358c38")
        .expect('status', 200);
});

it('Get authorized key from globalSetup and get status 200', function () {
    return frisby.get("https://api.getpostman.com/collections")
        .expect('status', 200);
});
