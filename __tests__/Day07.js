const frisby = require("frisby")

const API_KEY = "DEMO_KEY";
const COUNT = 10;

it("Using warn, info and log console statments for debugging", function () {
    return frisby.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=${COUNT}`)
      .expect("status", 200)
      .expect("header", "Content-Type", "application/json")
      .then((result) => {
        let pics = result.json;
        pics.forEach((pic) => console.log(pic.title, pic.url));
      })
})