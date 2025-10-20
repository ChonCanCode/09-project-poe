import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const league = "Mercenaries";
const url = `https://poe.ninja/api/data/currencyoverview?league=${league}&type=Currency`;

const now = new Date();
const timestamp = now.toISOString().split("T")[0];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDir = path.resolve(__dirname, "../data");
const currentPricePath = path.join(dataDir, "CurrentPrice.json");
const datedPricePath = path.join(dataDir, `${timestamp}price.json`);

async function fetchCurValue() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const allCurValue = data.lines.map((item) => ({
      timestamp,
      currency: item.currencyTypeName,
      chaosEquivalent: item.chaosEquivalent,
    }));

    let existingData = [];
    try {
      const fileContent = await fs.readFile(currentPricePath, "utf-8");
      existingData = JSON.parse(fileContent);
    } catch (err) {
      if (err.code !== "ENOENT") throw err;
    }

    const hasSameTimestamp = existingData.some(
      (entry) => entry.timestamp === timestamp
    );

    if (!hasSameTimestamp) {
      existingData.push(...allCurValue);
      await fs.writeFile(
        currentPricePath,
        JSON.stringify(existingData, null, 2)
      );
      console.log("Appended new date to CurrentPrice.json");
    } else {
      console.log(
        "CurrentPrice.json already contains today's data. No update needed."
      );
    }
    try {
      await fs.access(datedPricePath);
      console.log(`${timestamp}price.json already exists`);
    } catch {
      await fs.writeFile(datedPricePath, JSON.stringify(allCurValue, null, 2));
      console.log(`Created ${timestamp}price.json`);
    }
  } catch (error) {
    console.error("Error fetching or saving data:", error);
  }
}

fetchCurValue();
