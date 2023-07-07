import React from "react";
import { PieChart } from "../components/ChartComponet";
import { ChartScoreCard } from "../components/ChartComponet";

export const Dashboard = () => {
  return (
    <div>
      <PieChart></PieChart>
      <ChartScoreCard></ChartScoreCard>
    </div>
  );
};
