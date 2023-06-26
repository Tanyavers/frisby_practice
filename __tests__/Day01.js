const frisby = require('frisby');

it('Status code is 200', function () {
  return frisby.get('https://postman-echo.com/get?user-agent=PostmanRuntime/7.32.3')
    .expect('status', 200);
});

it('User Agent is correct', function () {  
    return frisby.get('https://postman-echo.com/get?user-agent=PostmanRuntime/7.32.3')
        .expect('json', 'args', {"user-agent": "PostmanRuntime/7.32.3"});
});
