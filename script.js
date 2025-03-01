const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR0tbmt01vyhpI7YQKVK5bzI7o5_UO2gdUdkp0x1-mV7bjJ7QEBteGJm3085yD2zPK1vQ2fszARi93w/pub?output=csv';

async function fetchData() {
    try {
        const response = await fetch(SHEET_URL);
        const data = await response.text();
        const rows = data.split("\n").map(row => row.split(","));

        // Skip headers & get the latest entry (last row)
        const lastRow = rows[rows.length - 1];
        const imageUrl = lastRow[0].trim();
        const description = lastRow.slice(1).join(",").trim(); // In case text has commas

        document.getElementById("image").src = imageUrl;
        document.getElementById("description").innerText = description;
    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById("description").innerText = "Failed to load data.";
    }
}

// Load data initially
fetchData();

// Auto-update every 10 seconds
setInterval(fetchData, 10000);
