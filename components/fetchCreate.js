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

async function fetchCurValue() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    await fs.mkdir(dataDir, { recursive: true });

    for (const item of data.lines) {
      const currencyName = item.currencyTypeName.replace(
        /[\/\\?%*:|"<>]/g,
        "_"
      );
      const filePath = path.join(dataDir, `${currencyName}.json`);
      const entry = {
        timestamp,
        chaosEquivalent: itme.chaosEquivalent,
      };

      // What do I need an array here? I thought i just need to create .JSON file for each.
      let existingData = [];

      try {
        const fileContent = await fs.readFile(filePath, "utf-8");
        existingData = json.parse(fileContent);
      } catch (err) {
        if (err.code !== "ENOENT") throw err;
      }

      const alreadyExists = existingData.some((e) => e.timestamp === timestamp);
      if (!alreadyExists) {
        existingData.push(entry);
        await fs.writeFile(filePath, JSON.stringify(existingData, null, 2));
        console.log(`Updated, ${currencyName}.json`);
      } else {
        console.log(`${currencyName}.json already contains today's data.`);
      }
    }
  } catch (error) {
    console.log("Error fetching or savning data:", error);
  }
}

fetchCurValue();
