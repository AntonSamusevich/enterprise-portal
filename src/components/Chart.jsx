import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import "./Chart.css";

const data = [
  { name: "1", value: 53 },
  { name: "2", value: 36 },
  { name: "3", value: 11 },
];

const COLORS = ["#97CC65", "#FFD964", "#FEAB46"];

const Chart = () => {
  const [currentValue, setCurrentValue] = useState(data[0].value);
  const [currentColor, setCurrentColor] = useState(COLORS[0]);

  const handleClick = (value, color) => {
    setCurrentValue(value);
    setCurrentColor(color);
  };

  const handleTextClick = () => {
    const nextIndex = (data.findIndex(d => d.value === currentValue) + 1) % data.length;
    setCurrentValue(data[nextIndex].value);
    setCurrentColor(COLORS[nextIndex]);
  };

  return (
    <div className="chart-container">
      <PieChart width={210} height={170}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={85}
          innerRadius={55}
          fill="#8884d8"
          dataKey="value"
          label={false}
          stroke="none"
          isAnimationActive={false}
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="24px"
          fontWeight="bold"
          fill={currentColor}
          onClick={handleTextClick}
        >
          {currentValue}
        </text>
        <Tooltip active={false} />
      </PieChart>

      <div className="legend-container">
        <div className="legend-labels">
          <div
            className="legend-item"
            style={{ backgroundColor: COLORS[0] }}
            onClick={() => handleClick(data[0].value, COLORS[0])}
          ></div>
          <p>Сделано</p>
        </div>
        <div className="legend-labels">
          <div
            className="legend-item"
            style={{ backgroundColor: COLORS[1] }}
            onClick={() => handleClick(data[1].value, COLORS[1])}
          ></div>
          <p>В процессе</p>
        </div>
        <div className="legend-labels">
          <div
            className="legend-item"
            style={{ backgroundColor: COLORS[2] }}
            onClick={() => handleClick(data[2].value, COLORS[2])}
          ></div>
          <p>Надо сделать</p>
        </div>
      </div>
    </div>
  );
};

export default Chart;
