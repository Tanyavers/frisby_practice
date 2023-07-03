const frisby = require("frisby");

const URL = "https://google.com";

it("Response time", () => {
    return frisby.get(URL)
        .expect("status", 200)
        .then((res) => {
            expect(res._responseTimeMs).toBeLessThan(1000)
        });
});

it("Lighthouse", () => {
    return  frisby.setup({request: {timeout: 20_000}})
        .get(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${URL}`)
        .expect("status", 200)
        .then((res) => {
            let performanceScore = res.json.lighthouseResult["categories"].performance.score * 100;
            expect(performanceScore).toBeGreaterThan(89);
        });
}, 20_000);