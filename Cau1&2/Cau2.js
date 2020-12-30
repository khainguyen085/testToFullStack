let data = [
    {
        name: "Arsenal",
        points: 99,
        GD: 45
    },
    {
        name: "Chelsea",
        points: 75,
        GD: 39
    },
    {
        name: "Manchester United",
        points: 60,
        GD: 29
    },
    {
        name: "Liverpool",
        points: 88,
        GD: 39
    },
]
function rankingClub(data) {
    ranks = Object.keys(data).map(Number).sort((a, b) => data[b].points - data[a].points),
    result = data.map(((o, i) => Object.assign({}, o, { position: ranks.indexOf(i) + 1 })));
    console.log(result)
}
rankingClub(data);

