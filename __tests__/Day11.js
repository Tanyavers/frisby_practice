const frisby = require("frisby")

it("Status code is 200. Check the water level, if the level is low, water the plants", () => {
    return frisby.get("https://water-ttl.herokuapp.com/hygrometer")
        .expect("status", 200)
        .then((res) => {
            const levelOfWater = res.json.level;

            if (levelOfWater < 0.6){
                frisby.post("https://water-ttl.herokuapp.com/water",{"duration": 10})
                    .expect("status", 200);
            }
            else {
                console.log(`The soil isn"t too dry. Level of water: ${levelOfWater}`);
            }
        });
});