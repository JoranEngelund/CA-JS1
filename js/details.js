const detailContainer = document.querySelector(".detail-result");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
    "X-RapidAPI-Key": "3cfc8bc1c5msh7ee858388ebf3e8p1da89fjsn4cecc8fb2d91",
  },
};
const url =
  "https://free-nba.p.rapidapi.com/stats/" +
  id +
  "?page=0&per_page=25&" +
  "key=3cfc8bc1c5msh7ee858388ebf3e8p1da89fjsn4cecc8fb2d91";
async function fetchPlayerStats() {
  try {
    const response = await fetch(url, options);
    const details = await response.json();
    console.log(details);
  } catch (error) {
    console.log(error);
  }
}

fetchPlayerStats();
