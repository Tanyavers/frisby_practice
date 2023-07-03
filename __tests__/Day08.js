const frisby = require("frisby");
const Joi = frisby.Joi;

const BASEURL = "https://randomuser.me/api";
const GENDER_FEMALE = "female";
const FRENCH_COUNTRY_CODE = "FR";

it("Get single random user", function () {
  return frisby.get(`${BASEURL}`)
    .expect("status", 200)
    .expect("header", "Content-Type", "application/json; charset=utf-8")
    .expect("json", "info", {"results": 1});
});

it("Get single random female user", function () {
  return frisby.get(`${BASEURL}?gender=${GENDER_FEMALE}`)
    .expect("status", 200)
    .expect("header", "Content-Type", "application/json; charset=utf-8")
    .expect("json", "info", {"results": 1})
    .expect("jsonTypes", {
      "results.0.gender": Joi.string().valid("female")
    });
});

it("Get single random female french user", function () {
  return frisby.get(`${BASEURL}?gender=${GENDER_FEMALE}nat=${FRENCH_COUNTRY_CODE}`)
    .expect("status", 200)
    .expect("header", "Content-Type", "application/json; charset=utf-8")
    .expect("json", "info", {"results": 1})
    .expect("jsonTypes", {
      "results.0.nat": Joi.string().valid(FRENCH_COUNTRY_CODE)
    });
});