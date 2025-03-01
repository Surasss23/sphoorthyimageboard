const SHEET_URL = 'const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTxxxxx/pub?output=csv';

async function fetchData() {
    try {
        const response = await fetch(SHEET_URL);
        const data = await response.text();
        const rows = data.split("\n").map(row => row.split(","));

        // Skip headers & get the latest entry (last row)
        const lastRow = rows[rows.length - 1];
        const imageUrl = lastRow[0].trim();
        const description = lastRow.slice(1).join(",").trim(); // Handle commas in text

        let imgElement = document.getElementById("image");
        
        // Image load hone ka wait karo, fir show karo
        imgElement.onload = () => imgElement.classList.add("loaded");
        imgElement.onerror = () => {
            console.error("Image failed to load:", imageUrl);
            imgElement.src = "https://via.placeholder.com/600x300?text=Image+Not+Found"; // Fallback image
        };
        imgElement.src = imageUrl;

        // Description Update
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
';

async function fetchData() {
    try {
        const response = await fetch(SHEET_URL);
        const data = await response.text();
        const rows = data.split("\n").map(row => row.split(","));

        // Skip headers & get the latest entry (last row)
        const lastRow = rows[rows.length - 1];
        const imageUrl = lastRow[0].trim();
        const description = lastRow.slice(1).join(",").trim(); // Handle commas in text

        let imgElement = document.getElementById("image");
        
        // Image load hone ka wait karo, fir show karo
        imgElement.onload = () => imgElement.classList.add("loaded");
        imgElement.onerror = () => {
            console.error("Image failed to load:", imageUrl);
            imgElement.src = "https://via.placeholder.com/600x300?text=Image+Not+Found"; // Fallback image
        };
        imgElement.src = imageUrl;

        // Description Update
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
