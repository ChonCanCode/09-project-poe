import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const files = Object.entries(
  import.meta.glob("../data/*.json", { eager: true })
).map(([path, mod]) => ({
  name: path.split("/").pop().replace(".json", ""),
  data: mod.default,
}));

export default function ChaosCharts() {
  return (
    <div className="flex flex-wrap gap-8 p-8 bg-gray-50">
      {Object.entries(files).map(([path, data]) => {
        const name = path.split("/").pop().replace(".json", "");

        return (
          <div
            key={name}
            className="bg-white rounded-2xl shadow p-4 w-[600px] border"
          >
            <h2 className="text-xl font-bold mb-2 text-center">{name}</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="timestamp" />
                <YAxis
                  label={{
                    value: "Chaos Value",
                    angle: -90,
                    position: "insideLeft",
                    style: { textAnchor: "middle" },
                  }}
                />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="chaosEquivalent"
                  stroke="#8b5cf6"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  name={name}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        );
      })}
    </div>
  );
}
