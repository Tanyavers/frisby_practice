const frisby = require("frisby");

it("Call the mock", function () {
    return frisby.get("https://ae0ccb82-75aa-463b-9674-8a0dc2d089f6.mock.pstmn.io")
      .expect("status", 418)
      .expect("header", "Content-Type", "application/json; charset=utf-8")
      .expect("json", "error", {"message": "A teapot is a vessel used for steeping tea leaves or a herbal mix in boiling or near-boiling water"})
});
