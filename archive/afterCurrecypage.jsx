import ChasoChart from "../components/CurrencyChart";
import SearchBar from "../components/SearchBar";

export default function Currency() {
  return (
    <div className="p-6min-h-screen">
      <h1 className="text-2xl font-bold mb-4 mt-5">Currency</h1>
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <div className=" bg-gray-600 p-4 rounded shadow">
        <div className="flex items-center justify-center flex-col">
          <ChasoChart filter={searchQuery} />
        </div>
      </div>
    </div>
  );
}
