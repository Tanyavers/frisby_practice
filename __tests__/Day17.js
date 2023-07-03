const frisby = require("frisby");

it("Visualizer", async () => {
    const response = await frisby
        .get("https://pokeapi.co/api/v2/type")
        .expect("status", 200);

    expect(getCompliedTemplate({ response: response.json.results })).toContain("<tr>");
});

function getCompliedTemplate ({response}) {
    return template = `
        <style>
            table {
                border-collapse: collapse;
                width: 100%;
                background-color: #00FFEF;
            }
            
            table th, table td {
                border: 1px solid black;
                padding: 8px;
                text-align: left;
            }
        </style>
        
        <table>
            <tr>
                <th>Name</th>
                <th>URL</th>
            </tr>
            ${response.reduce((acc, row) => 
                acc += `
                    <tr>
                        <td>${row.name}</td>
                        <td>${row.url}</td>
                    </tr>
                `, "")}
        </table>
    `;
}

