// Level 1 Process

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
    "X-RapidAPI-Key": "3cfc8bc1c5msh7ee858388ebf3e8p1da89fjsn4cecc8fb2d91",
  },
};

const url = "https://free-nba.p.rapidapi.com/stats?page=0&per_page=25";
const resultContainer = document.querySelector(".results");

async function fetchPlayer() {
  try {
    const response = await fetch(url, options);
    const json = await response.json();
    const data = json.data;
    console.log(data);

    for (let i = 0; i < data.length; i++) {
      resultContainer.innerHTML += `<div class="result">
                                        <a href="details.html?id=${data[i].id}"><h2>Player: ${data[i].player.first_name} ${data[i].player.last_name}</h2>
                                        <h3>Position played: ${data[i].player.position}</h3></a>
                                        <a href="details.html?id=${data[i].team.id}"><h4>Team: ${data[i].team.full_name}</h4></a>
                                    </div>`;
    }
  } catch (error) {
    resultContainer.innerHTML = `<div class="error">An error has occurred: ${error}</div>`;
    console.log(error);
  }
}

fetchPlayer();
