"use client";

import React from "react";

interface CircularProgressProps {
  percentage: number;
  currentDay?: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage,
  currentDay,
}) => {
  const size = 180;
  const strokeWidth = 4;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = `${circumference} ${circumference}`;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        {/* <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255, 206, 84, 0.2)"
          strokeWidth={strokeWidth}
          fill="transparent"
        /> */}
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#FFFFFF"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{
            filter: "drop-shadow(0px 0px 6px rgba(252, 116, 0, 1))",
          }}
        />
      </svg>
      <div
        className="absolute inset-0 flex items-center justify-center text-white"
        style={{
          textShadow: "0px 0px 6px rgba(252, 165, 0, 1)",
        }}
      >
        <div className="flex items-baseline gap-x-2">
          {currentDay && (
            <div className="text-lg-compact font-medium tracking-wider uppercase">
              {currentDay}
            </div>
          )}
          <div className="text-3xl-tight">{percentage}%</div>
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;
