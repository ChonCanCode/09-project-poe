const league = "Mercenaries";
const url = `https://poe.ninja/api/data/currencyoverview?league=${league}&type=Currency`;

try {
  const response = await fetch(url);
  const data = await response.json();

  console.log("Full JSON structure:");
  console.log(JSON.stringify(data, null, 2));
} catch (error) {
  console.error("Error fetching data:", error);
}
