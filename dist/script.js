"use strict";
const drivers = [
    { "name": "Lando Norris", "team": "McLaren", "nationality": "British", "firstRaceYear": 2019, "rookie": false },
    { "name": "Oscar Piastri", "team": "McLaren", "nationality": "Australian", "firstRaceYear": 2023, "rookie": false },
    { "name": "Charles Leclerc", "team": "Ferrari", "nationality": "Monegasque", "firstRaceYear": 2018, "rookie": false },
    { "name": "Lewis Hamilton", "team": "Ferrari", "nationality": "British", "firstRaceYear": 2007, "rookie": false },
    { "name": "George Russell", "team": "Mercedes", "nationality": "British", "firstRaceYear": 2019, "rookie": false },
    { "name": "Andrea Kimi Antonelli", "team": "Mercedes", "nationality": "Italian", "firstRaceYear": 2025, "rookie": true },
    { "name": "Max Verstappen", "team": "Red Bull Racing", "nationality": "Dutch", "firstRaceYear": 2015, "rookie": false },
    { "name": "Yuki Tsunoda", "team": "Red Bull Racing", "nationality": "Japanese", "firstRaceYear": 2021, "rookie": false },
    { "name": "Alexander Albon", "team": "Williams", "nationality": "Thai", "firstRaceYear": 2019, "rookie": false },
    { "name": "Carlos Sainz", "team": "Williams", "nationality": "Spanish", "firstRaceYear": 2015, "rookie": false },
    { "name": "Fernando Alonso", "team": "Aston Martin", "nationality": "Spanish", "firstRaceYear": 2001, "rookie": false },
    { "name": "Lance Stroll", "team": "Aston Martin", "nationality": "Canadian", "firstRaceYear": 2017, "rookie": false },
    { "name": "Pierre Gasly", "team": "Alpine", "nationality": "French", "firstRaceYear": 2017, "rookie": false },
    { "name": "Franco Colapinto", "team": "Alpine", "nationality": "Argentinian", "firstRaceYear": 2024, "rookie": false },
    { "name": "Esteban Ocon", "team": "Haas", "nationality": "French", "firstRaceYear": 2016, "rookie": false },
    { "name": "Oliver Bearman", "team": "Haas", "nationality": "British", "firstRaceYear": 2024, "rookie": true },
    { "name": "Nico Hülkenberg", "team": "Kick Sauber", "nationality": "German", "firstRaceYear": 2010, "rookie": false },
    { "name": "Gabriel Bortoleto", "team": "Kick Sauber", "nationality": "Brazilian", "firstRaceYear": 2025, "rookie": true },
    { "name": "Liam Lawson", "team": "Racing Bulls", "nationality": "New Zealander", "firstRaceYear": 2023, "rookie": true },
    { "name": "Isack Hadjar", "team": "Racing Bulls", "nationality": "French", "firstRaceYear": 2025, "rookie": true }
];
let tableDisplay = document.getElementById("driver-table-data");
let sortButton = document.getElementById("sort-button");
let sortSelection = document.getElementById("sort-selection");
sortButton.addEventListener("click", sortDrivers);
function sortDrivers() {
}
function renderDriverTable() {
    for (let driver of drivers) {
        let row = tableDisplay.insertRow();
        row.insertCell().innerText = driver.name;
        row.insertCell().innerText = driver.team;
        row.insertCell().innerText = driver.nationality;
        row.insertCell().innerText = driver.firstRaceYear.toString();
        row.insertCell().innerText = driver.rookie ? "Yes" : "No";
    }
}
