const matches = [
  {
    homeTeam: "France",
    awayTeam: "Croatia",
    score: "2:1",
    date: "18.01.2019",
  },
  {
    homeTeam: "England",
    awayTeam: "Spain",
    score: "3:1",
    date: "18.01.2019",
  },
  {
    homeTeam: "Spain",
    awayTeam: "Croatia",
    score: "0:0",
    date: "12.01.2019",
  },
  {
    homeTeam: "France",
    awayTeam: "England",
    score: "0:1",
    date: "12.01.2019",
  },
  {
    homeTeam: "England",
    awayTeam: "Croatia",
    score: null,
    date: "03.02.2019",
  },
  {
    homeTeam: "Spain",
    awayTeam: "France",
    score: null,
    date: "03.02.2019",
  },
];

function getRankings(games) {
  let points = {};

  games.forEach((game) => {
    const score = game.score ? game.score.split(":") : null;
    const homeTeamPoints = points[game.homeTeam];
    const awayTeamPoints = points[game.awayTeam];

    if (score && score[0] === score[1]) {
      homeTeamPoints
        ? (points[game.homeTeam] += 1)
        : (points[game.homeTeam] = 1);
      awayTeamPoints
        ? (points[game.awayTeam] += 1)
        : (points[game.awayTeam] = 1);
    }

    if (score && score[0] > score[1]) {
      homeTeamPoints
        ? (points[game.homeTeam] += 3)
        : (points[game.homeTeam] = 3);
      awayTeamPoints ? console.log(null) : (points[game.awayTeam] = 0);
    }

    if (score && score[0] < score[1]) {
      homeTeamPoints ? console.log(null) : (points[game.homeTeam] = 0);
      awayTeamPoints
        ? (points[game.awayTeam] += 3)
        : (points[game.awayTeam] = 3);
    }
  });

  const results = Object.keys(points)
    .map((team) => ({
      team: team,
      points: points[team],
    }))
    .sort((firstTeam, secondTeam) => {
      if (firstTeam.points < secondTeam.points) {
        return 1;
      }
      if (firstTeam.points > secondTeam.points) {
        return -1;
      }

      return firstTeam.team.localeCompare(secondTeam.team);
    });

  return results;
}

const footbalRankings = getRankings(matches);
console.log(footbalRankings);
