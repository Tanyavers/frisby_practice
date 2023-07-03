const frisby = require("frisby");
const joi = frisby.Joi;

jest.setTimeout(20_000);

it("Planets check includes Tatooine", () => {
    return frisby.get("https://swapi.dev/api/planets/")
        .expect("status", 200)
        .expect("jsonTypes", "count", joi.number())
        .expect("bodyContains", "Tatooine");
});

it("Body contains Ewokese language and average talls", () => {
    return frisby.get("https://swapi.dev/api/species/")
        .expect("status", 200)
        .expect("bodyContains", "Ewokese")
        .then((res) => {
            const highestSpecies = res.json.results.filter(s => parseInt(s.average_height) > 100);
            console.log(`Number of species with average height > 100 on the first page: ${highestSpecies.length}`);
        });
});