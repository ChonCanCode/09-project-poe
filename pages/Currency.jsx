import { useState } from "react";
import ChaosCharts from "../components/CurrencyChart"; // fix typo: ChasoChart → ChaosCharts
import SearchBar from "../components/SearchBar";

export default function Currency() {
  // ✅ Add state for search term
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ Optional submit handler (you can just log for now)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 mt-5">Currency</h1>
      <div className=" bg-gray-300 p-4 rounded shadow">
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-purple-900 font-bold">Divine Orb</h2>
          <ChasoChart />
        </div>
      </div>
    </div>
  );
}
