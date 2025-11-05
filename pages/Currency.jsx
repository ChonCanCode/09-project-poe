import { useState } from "react";
import ChaosCharts from "../components/CurrencyChart";
import SearchBar from "../components/SearchBar";

export default function Currency() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 mt-5">Currency</h1>

      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        onSubmit={handleSubmit}
      />

      <div className="bg-gray-600 p-4 rounded shadow">
        <div className="flex items-center justify-center flex-col">
          <ChaosCharts filter={searchTerm} />
        </div>
      </div>
    </div>
  );
}
