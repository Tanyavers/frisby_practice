const frisby = require("frisby");
const moment = require("moment");

const URL = "http://worldtimeapi.org/api/ip";

it("Moment in time", () => {
    return frisby.get(`${URL}`)
      .expect("status", 200)
      .then((res) => {
        const twoDays = moment(res.day_of_week).add(2, "days");
        const formattedTwoDays = moment(twoDays).format("ddd");

        expect(twoDays).not.toBeNull();
      });
    
});
