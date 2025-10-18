const league = "Mercenaries";
const url = `https://poe.ninja/api/data/currencyoverview?league=${league}&type=Currency`;

try {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

  const data = await response.json();
  const divine = data.lines.find((c) => c.currencyTypeName === "Divine Orb");

  if (!divine) {
    console.error("Divine Orb not found in API response.");
  } else {
    console.log(`1 Divine Orb = ${divine.chaosEquivalent} Chaos Orbs`);
  }
} catch (error) {
  console.error("Error fetching data:", error);
}
