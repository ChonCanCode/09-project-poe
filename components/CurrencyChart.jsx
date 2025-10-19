import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
} from "recharts";
import NewFile from "../NewFile.json";

export default function ChaosChart() {
  // Filter for only Divine Orb entries
  const divineData = NewFile.filter(
    (entry) => entry.currency === "Divine Orb"
  ).map((entry) => ({
    name: entry.timestamp, // or another date field
    value: entry.chaosEquivalent,
  }));

  return (
    <LineChart
      width={600}
      height={300}
      data={divineData}
      margin={{ top: 5, right: 20, bottom: 5, left: 5 }}
    >
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" stroke="black" tick={{ fill: "black" }} />
      <YAxis
        width={60}
        label={{
          value: "Chaos Value",
          position: "insideLeft",
          angle: -90,
          style: { fill: "black", fontSize: 14, fontWeight: "bold" },
        }}
        stroke="black"
        tick={{ fill: "black" }}
      />
      <Tooltip />
      <Legend align="right" />
      <Line
        type="monotone"
        dataKey="value"
        stroke="purple"
        strokeWidth={2}
        dot={{ r: 3 }}
        name="Divine Orb"
      />
    </LineChart>
  );
}
