import fetch from "node-fetch";

const league = "Mercenaries";
const url = `https://poe.ninja/api/data/currencyoverview?league=${league}&type=Currency`;

const response = await fetch(url);
const data = await response.json();

const divine = data.lines.find((c) => c.currencyTypeName === "Divine Orb");
console.log(`1 Divine Orb = ${divine.chaosEquivalent} Chaos Orbs`);
