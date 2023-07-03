const frisby = require("frisby");

it("get color", () => {
    const color = Math.random().toString(16).slice(2, 8).toUpperCase();
    return frisby.get(`https://www.thecolorapi.com/id?hex=${color}`)
        .expect("status", 200)
        .expect('json', 'hex', {
            clean: color
        });
});