// Google Sheets Public CSV URL (Replace with Your Sheet URL)
const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR0tbmt01vyhpI7YQKVK5bzI7o5_UO2gdUdkp0x1-mV7bjJ7QEBteGJm3085yD2zPK1vQ2fszARi93w/pub?output=csv';

// Function to Fetch Data from Google Sheets
async function fetchData() {
    try {
        let response = await fetch(SHEET_URL);
        let data = await response.text();
        let rows = data.split("\n").map(row => row.split(","));
        
        // Extract first row data (Latest Image and Text)
        let latestImage = rows[1][0].trim(); // Image URL
        let latestText = rows[1][1].trim();  // Description

        // Update DOM Elements
        document.getElementById("imageDisplay").src = latestImage;
        document.getElementById("textDisplay").innerText = latestText;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Fetch Data Every 10 Seconds for Updates
setInterval(fetchData, 10000);
fetchData();
