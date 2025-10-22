import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const league = "Mercenaries";
const url = `https://poe.ninja/api/data/currencyoverview?league=${league}&type=Currency`;

const date = new Date();
const dateStamp = date.toISOString().split("T")[0];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.resolve(__dirname, "../data");

async function fetchCurName() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const currencyName = data.lines.map((item) => ({
      currency: item.currencyTypeName,
    }));
    const curPricePath = path.join(dataDir, `${currencyName}price.json`);
    try {
      await fs.access(curPricePath);
      console.log(`${currencyName}price.json`, " file already exist.");
    } catch {
      await fs.writeFile(curPricePath, JSON.stringify(currencyName, null, 2));
      console.log("Currency price file is created.");
    }
  } catch (err) {
    console.error("Error fetching currency: ", err);
  }
}

fetchCurName();
