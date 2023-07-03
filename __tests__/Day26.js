const frisby = require("frisby");
const cheerio = require("cheerio");

it("Should get search results from Bing", () => {
    return frisby.get("https://www.bing.com/search?q=postman")
        .expect("status", 200)
        .then((res) => {
            const $ = cheerio.load(res.body);
            const links = [];

            $("h2").each((_, el) => {
                const linkElement = $(el).closest("a");
                const link = linkElement.attr("href");
                if (link) {
                    links.push(link);
                }
            });

            expect(res.status).toBe(200);
            expect(links).toBeInstanceOf(Array);
        });
});