// Level 1 Process
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://www.balldontlie.io/api/v1/teams/" + id;
const detailContainer = document.querySelector(".details-result");
const titleContainer = document.querySelector("title");

async function fetchTeamDetails() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    titleContainer.innerHTML = `${details.full_name}`;
    detailContainer.innerHTML = `<div class="card details">
                                  <h1>Team name: ${details.full_name}</h1>
                                  <h2>Location: ${details.city}</h2>
                                  <h2>Name: ${details.name}</h2>
                                  <h3>Abbreviation: ${details.abbreviation}</h3>
                                  <h3>NBA Conference: ${details.conference}</h3>
                                  <h3>NBA Division: ${details.division}</h3>
                                </div>`;
  } catch (error) {
    detailContainer.innerHTML = `<div class="card details error">An error has occurred: ${error}</div>`;
  }
}

fetchTeamDetails();
