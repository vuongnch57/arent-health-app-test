"use client";

import React, { useState } from "react";
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Dot,
} from "recharts";
import { TimePeriod, ChartData } from "@/data/mockData";

interface LineChartProps {
  data: ChartData;
  showPeriodOptions?: boolean;
  height: string;
}

// Custom dot component for the chart points
interface CustomDotProps {
  cx?: number;
  cy?: number;
  stroke?: string;
}

const CustomDot = (props: CustomDotProps) => {
  const { cx, cy, stroke } = props;
  if (cx === undefined || cy === undefined) return null;
  return (
    <Dot cx={cx} cy={cy} r={4} fill={stroke} stroke={stroke} strokeWidth={2} />
  );
};

const LineChart: React.FC<LineChartProps> = ({ data, showPeriodOptions, height }) => {
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>("month");

  const currentData = data[selectedPeriod];

  const handlePeriodChange = (period: TimePeriod) => {
    setSelectedPeriod(period);
  };

  const getPeriodLabel = (period: TimePeriod) => {
    switch (period) {
      case "day":
        return "日";
      case "week":
        return "週";
      case "month":
        return "月";
      case "year":
        return "年";
    }
  };

  return (
    <div className={`w-full bg-dark-500 relative ${height}`}>
      {/* Chart */}
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart
          data={currentData}
          margin={{
            top: 20,
            left: 30,
            right: 30,
          }}
        >
          <CartesianGrid
            strokeDasharray="none"
            stroke="#8b8b8b"
            strokeWidth={1}
            horizontal={false}
            vertical={true}
          />
          <XAxis
            dataKey="label"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#ffffff", fontSize: 12 }}
            interval={0}
          />
          <YAxis hide />
          <Line
            type="monotone"
            dataKey="value1"
            stroke="#FFCC21"
            strokeWidth={3}
            dot={<CustomDot />}
            activeDot={{ r: 6, fill: "#FFCC21" }}
          />
          <Line
            type="monotone"
            dataKey="value2"
            stroke="#8FE9D0"
            strokeWidth={3}
            dot={<CustomDot />}
            activeDot={{ r: 6, fill: "#8FE9D0" }}
          />
        </RechartsLineChart>
      </ResponsiveContainer>
      {showPeriodOptions && (
        <div className="flex items-center gap-x-8 px-3">
          {(["day", "week", "month", "year"] as TimePeriod[]).map((period) => (
            <button
              key={period}
              onClick={() => handlePeriodChange(period)}
              className={`px-4 py-1 text-[11px] rounded-full font-medium transition-colors cursor-pointer ${
                selectedPeriod === period
                  ? "bg-primary-300 text-white"
                  : "bg-white text-primary-300"
              }`}
            >
              {getPeriodLabel(period)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LineChart;
