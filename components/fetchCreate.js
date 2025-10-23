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
console.log(dataDir);
