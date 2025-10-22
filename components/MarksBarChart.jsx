"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

export const MarksBarChart = () => {
  const data = [
    { day: "Monday", deepSleep: 3.2, remSleep: 2.1 },
    { day: "Tuesday", deepSleep: 3.8, remSleep: 1.9 },
    { day: "Wednesday", deepSleep: 4.0, remSleep: 2.3 },
    { day: "Thursday", deepSleep: 2.9, remSleep: 2.5 },
    { day: "Friday", deepSleep: 3.4, remSleep: 1.8 },
    { day: "Saturday", deepSleep: 4.1, remSleep: 2.6 },
    { day: "Sunday", deepSleep: 3.6, remSleep: 2.4 },
  ];

  return (
    <ResponsiveContainer>
      <BarChart data={data} margin={{ right: 10, left: -30 }}>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis
          dataKey="day"
          tick={{ fill: "var(--color-base-content)", fontSize: 12 }}
          stroke="var(--color-base-content)"
        />
        <YAxis
          domain={[0, 5]}
          ticks={[0, 1, 2, 3, 4, 5]}
          tick={{ fill: "var(--color-base-content)", fontSize: 12 }}
          stroke="var(--color-base-content)"
        />

        {/* Custom tooltip */}
        <Tooltip
          cursor={{ opacity: 0 }}
          content={({ active, payload, label }) => {
            if (!active || !payload?.length) return null;
            const { deepSleep, remSleep } = payload[0].payload;

            return (
              <div className="bg-base-200 text-base-content rounded-lg p-3 shadow-lg opacity-93  border border-base-300">
                <p className="m-0 font-semibold">{label}</p>
                <div className="mt-1 flex flex-col gap-1 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-sm bg-primary"></span>
                    <span>Deep Sleep: {deepSleep} hrs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-sm bg-accent"></span>
                    <span>REM Sleep: {remSleep} hrs</span>
                  </div>
                </div>
              </div>
            );
          }}
        />

        <Legend
          wrapperStyle={{ color: "var(--color-base-content)" }}
          formatter={(value) => (
            <span className="text-base-content text-sm">{value}</span>
          )}
        />

        <Bar
          dataKey="deepSleep"
          name="Deep Sleep"
          fill="var(--color-primary)"
          radius={[6, 6, 0, 0]}
        />
        <Bar
          dataKey="remSleep"
          name="REM Sleep"
          fill="var(--color-accent)"
          radius={[6, 6, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
