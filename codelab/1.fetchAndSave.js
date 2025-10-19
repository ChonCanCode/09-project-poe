import fs from "fs/promises";

const league = "Mercenaries";
const url = `https://poe.ninja/api/data/currencyoverview?league=${league}&type=Currency`;

const now = new Date();
const timestamp = now.toISOString().split("T")[0];

async function fetchCurValue() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const allCurValue = data.lines.map((item) => ({
      timestamp,
      currency: item.currencyTypeName,
      chaosEquivalent: item.chaosEquivalent,
    }));

    await fs.writeFile("NewFile.json", JSON.stringify(allCurValue, null, 2));
    console.log("Data saved to NewFile.json");
  } catch (error) {
    console.error("Error fetching or saving data:", error);
  }
}

fetchCurValue();
