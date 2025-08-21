'use client';

import React from 'react';
import { ChartDataPoint } from '@/data/mockData';

interface LineChartProps {
  data: ChartDataPoint[];
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const maxValue = Math.max(...data.flatMap(d => [d.value1, d.value2]));
  const chartWidth = 400;
  const chartHeight = 200;
  const padding = 40;

  const getX = (index: number) => padding + (index / (data.length - 1)) * (chartWidth - 2 * padding);
  const getY = (value: number) => chartHeight - padding - ((value / maxValue) * (chartHeight - 2 * padding));

  // Generate path for line 1 (yellow)
  const path1 = data.map((point, index) => {
    const x = getX(index);
    const y = getY(point.value1);
    return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');

  // Generate path for line 2 (cyan)
  const path2 = data.map((point, index) => {
    const x = getX(index);
    const y = getY(point.value2);
    return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');

  return (
    <div className="bg-dark-600 p-6 rounded-lg">
      <svg width={chartWidth} height={chartHeight} className="w-full h-auto">
        {/* Grid lines */}
        {[0, 20, 40, 60, 80, 100].map(value => {
          const y = getY(value);
          return (
            <line
              key={value}
              x1={padding}
              y1={y}
              x2={chartWidth - padding}
              y2={y}
              stroke="#444"
              strokeWidth={1}
            />
          );
        })}
        
        {/* Vertical grid lines */}
        {data.map((_, index) => {
          const x = getX(index);
          return (
            <line
              key={index}
              x1={x}
              y1={padding}
              x2={x}
              y2={chartHeight - padding}
              stroke="#444"
              strokeWidth={1}
            />
          );
        })}

        {/* Line 1 (Yellow) */}
        <path
          d={path1}
          fill="none"
          stroke="#FFCC21"
          strokeWidth={2}
        />

        {/* Line 2 (Cyan) */}
        <path
          d={path2}
          fill="none"
          stroke="#8FE9D0"
          strokeWidth={2}
        />

        {/* Data points for line 1 */}
        {data.map((point, index) => (
          <circle
            key={`point1-${index}`}
            cx={getX(index)}
            cy={getY(point.value1)}
            r={3}
            fill="#FFCC21"
          />
        ))}

        {/* Data points for line 2 */}
        {data.map((point, index) => (
          <circle
            key={`point2-${index}`}
            cx={getX(index)}
            cy={getY(point.value2)}
            r={3}
            fill="#8FE9D0"
          />
        ))}

        {/* X-axis labels */}
        {data.map((point, index) => (
          <text
            key={`label-${index}`}
            x={getX(index)}
            y={chartHeight - 10}
            fill="white"
            fontSize="12"
            textAnchor="middle"
          >
            {point.month}
          </text>
        ))}
      </svg>
    </div>
  );
};

export default LineChart;
