import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend } from "recharts";

const data = [
  { name: "Day 1", uv: 400, pv: 2400, amt: 2400 },
  { name: "Day 2", uv: 300, pv: 1398, amt: 2210 },
  { name: "Day 3", uv: 200, pv: 9800, amt: 2290 },
  { name: "Day 4", uv: 278, pv: 3908, amt: 2000 },
  { name: "Day 5", uv: 189, pv: 4800, amt: 2181 },
];

const MyChart = () => (
  <LineChart
    width={600}
    height={300}
    data={data}
    margin={{ top: 5, right: 20, bottom: 5, left: 5 }}
  >
    <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
    <Line
      type="monotone"
      dataKey="uv"
      stroke="purple"
      strokeWidth={2}
      name="Divine value"
    />
    <XAxis dataKey="name" />
    <YAxis
      width={60}
      label={{ value: "Chaos", position: "insideLeft", angle: -90 }}
    />
    <Legend align="right" />
  </LineChart>
);

export default function Currency() {
  return (
    <div className="p-6min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Currency Page</h1>
      <div className="bg-gray-200 p-4 rounded shadow">
        <MyChart />
      </div>
    </div>
  );
}
