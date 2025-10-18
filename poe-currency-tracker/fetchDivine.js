import fs from "fs";
const league = "Mercenaries";
const url = `https://poe.ninja/api/data/currencyoverview?league=${league}&type=Currency`;

try {
  const response = await fetch(url);
  const data = await response.json();

  const divine = data.lines.find((c) => c.currencyTypeName === "Divine Orb");

  if (!divine) throw new Error("Divine Orb not found in response");

  const entry = {
    date: new Date().toISOString().split("T")[0],
    chaosValue: divine.chaosEquivalent,
  };

  // Load existing data (if any)
  let prices = [];
  if (fs.existsSync("divine-history.json")) {
    prices = JSON.parse(fs.readFileSync("divine-history.json", "utf8"));
  }

  // Append new data
  prices.push(entry);

  fs.writeFileSync("divine-history.json", JSON.stringify(prices, null, 2));
  console.log(
    `✅ Saved Divine Orb value: ${entry.chaosValue} Chaos (${entry.date})`
  );
} catch (err) {
  console.error("❌ Error fetching Divine value:", err);
}
