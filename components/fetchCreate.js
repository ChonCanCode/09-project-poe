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
        
        await fs.mkdir(dataDir, { recursive:true });

        for (const item of data.lines) {
            const crurrencyName = item.currencyTypeName.replace(/[\/\\?%*:|"<>]/g,
        "_");

        const filePath = path.join( dataDir, `${currencyName}.json`)
        }

        const entry = {
            timestamp,
            chaosEquivalent: itme.chaosEquivalent
        };

        let existingData = [];
        try {
            const fileConent = await fs.readFile(filePath, "utf-8");
            existingData = json.parse(fileContent);
        } catch (err) {
            if (err.code !== "ENOENT") throw err;
        }
    }
}