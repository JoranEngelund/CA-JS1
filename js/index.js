// Level 1 Process
const loader = document.querySelector(".loader");

const stopLoader = () => loader.classList.remove("loader");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
    "X-RapidAPI-Key": "3cfc8bc1c5msh7ee858388ebf3e8p1da89fjsn4cecc8fb2d91",
  },
};

const url = "https://www.balldontlie.io/api/v1/games";
const resultContainer = document.querySelector(".container");

async function fetchGamesApi() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    const data = json.data;
    stopLoader();
    for (let i = 0; i < data.length; i++) {
      if (i === 10) {
        break;
      }
      let regularSeason = "";
      const difference = data[i].home_team_score - data[i].visitor_team_score;
      const secondDifference =
        data[i].visitor_team_score - data[i].home_team_score;
      if (!data[i].postseason) {
        regularSeason = "Regular season";
      }

      if (data[i].home_team_score < data[i].visitor_team_score) {
        resultContainer.innerHTML += `<div class="card">
                                        <h2><a href="details.html?id=${data[i].home_team.id}">${data[i].home_team.city} ${data[i].home_team.name}</a> ${data[i].home_team_score}
                                        : ${data[i].visitor_team_score}
                                        <a href="details.html?id=${data[i].visitor_team.id}">${data[i].visitor_team.city} ${data[i].visitor_team.name}</a> </h2>
                                        <h2>Away team wins with ${secondDifference}</h2>
                                        <h3>Periodes played: ${data[i].period}</h3>
                                        <h3>Date played: ${data[i].date}</h3>
                                        <h3>Type of play: ${regularSeason}</h3>
                                        <h3>NBA Season: ${data[i].season}</h3>
                                    </div>`;
      } else if (data[i].home_team_score > data[i].visitor_team_score) {
        resultContainer.innerHTML += `<div class="card">
                                        <h2><a href="details.html?id=${data[i].home_team.id}">${data[i].home_team.city} ${data[i].home_team.name}</a> ${data[i].home_team_score}
                                        : ${data[i].visitor_team_score}
                                        <a href="details.html?id=${data[i].visitor_team.id}">${data[i].visitor_team.city} ${data[i].visitor_team.name}</a> </h2>
                                        <h2>Home team wins with ${difference}</h2>
                                        <h3>Periodes played: ${data[i].period}</h3>
                                        <h3>Date played: ${data[i].date}</h3>
                                        <h3>Type of play: ${regularSeason}</h3>
                                        <h3>NBA Season: ${data[i].season}</h3>
                                    </div>`;
      }
    }
  } catch (error) {
    resultContainer.innerHTML = `<div class="card error">An error has occurred: ${error}</div>`;
    console.log(error);
  }
}

fetchGamesApi();
