import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";

function WidthByBreedChart({ data }) {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="breed" angle={-45} textAnchor="end" interval={0} height={80} />
          <YAxis allowDecimals={false} label={{ value: 'Avg Width (px)', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="avgWidth" fill="#82ca9d" name="Avg Width (px)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WidthByBreedChart;
