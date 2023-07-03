const frisby = require("frisby");

it("Get Artist Information", () => {
    const query = `query getByArtist($name: String!) {
        queryArtists(byName: $name) {
            name
            image
            albums {
                name
            }
        }
    }`;

    const variables = {
        name: "Kanye West",
    };

    return frisby
        .post("https://joyce-spotify-graphql.herokuapp.com/graphql", {
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query,
                variables,
            }),
        })
        .expect("status", 200)
        .expect("json", "data.queryArtists[0].name", `${variables.name}`);
});
