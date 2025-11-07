
interface Driver {
  name: string;
  team: string;
  nationality: string;
  firstRaceYear: number;
  rookie: boolean;
}

const drivers: Driver[] = [
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
  { "name": "Oliver Bearman", "team": "Haas", "nationality": "British", "firstRaceYear": 2024, "rookie": false },

  { "name": "Nico Hülkenberg", "team": "Kick Sauber", "nationality": "German", "firstRaceYear": 2010, "rookie": false },
  { "name": "Gabriel Bortoleto", "team": "Kick Sauber", "nationality": "Brazilian", "firstRaceYear": 2025, "rookie": true },

  { "name": "Liam Lawson", "team": "Racing Bulls", "nationality": "New Zealander", "firstRaceYear": 2023, "rookie": false },
  { "name": "Isack Hadjar", "team": "Racing Bulls", "nationality": "French", "firstRaceYear": 2025, "rookie": true }
];

let tableDisplay = document.getElementById("driver-table-data") as HTMLTableElement;
let sortButton = document.getElementById("sort-button") as HTMLButtonElement;
let sortSelection = document.getElementById("sort-by") as HTMLSelectElement;

sortButton.addEventListener("click", sortDrivers);

function sortDrivers() {
    switch(sortSelection.selectedIndex) {
        case 0:
            drivers.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 1:
            drivers.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 2:
            drivers.sort((a, b) => a.team.localeCompare(b.team));
            break;
        case 3:
            drivers.sort((a, b) => b.team.localeCompare(a.team));
            break;
        case 4:
            drivers.sort((a, b) => a.nationality.localeCompare(b.nationality));
            break;
        case 5:
            drivers.sort((a, b) => b.nationality.localeCompare(a.nationality));
            break;
        case 6:
            drivers.sort((a, b) => a.firstRaceYear - b.firstRaceYear);
            break;
        case 7:
            drivers.sort((a, b) => b.firstRaceYear - a.firstRaceYear);
            break;
        case 8:
            drivers.sort((a, b) => Number(b.rookie) - Number(a.rookie));
            break;
        case 9:
            drivers.sort((a, b) => Number(a.rookie) - Number(b.rookie));
            break;           
    }
    renderDriverTable();
}

function renderDriverTable() {
    tableDisplay.innerHTML = "";
    for (let driver of drivers) {
        let row = tableDisplay.insertRow();
        row.insertCell().innerText = driver.name;
        row.insertCell().innerText = driver.team;
        row.insertCell().innerText = driver.nationality;
        row.insertCell().innerText = driver.firstRaceYear.toString();
        row.insertCell().innerText = driver.rookie ? "Yes" : "No";
    }
}

sortDrivers();
