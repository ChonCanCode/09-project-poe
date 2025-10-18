import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
} from "recharts";
import divineHistory from "../poe-currency-tracker/divine-history.json";

export default function ChaosChart() {
  const data = divineHistory.map((entry) => ({
    name: entry.date,
    value: entry.chaosValue,
  }));

  return (
    <LineChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 5 }}
    >
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" stroke="black" tick={{ fill: "black" }} />
      <YAxis
        width={60}
        label={{
          value: "Chaos",
          position: "insideLeft",
          angle: -90,
          style: {
            fill: "black",
            fontSize: 14,
            fontWeight: "bold",
          },
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
        name="Divine Value"
      />
    </LineChart>
  );
}
