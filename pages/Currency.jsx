import ChasoChart from "../components/CurrencyChart";

export default function Currency() {
  return (
    <div className="p-6min-h-screen">
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
