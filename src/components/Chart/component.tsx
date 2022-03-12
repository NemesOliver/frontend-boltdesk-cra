import React, { FC } from "react";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from "recharts";
import { Props } from "./props";
import { data } from "./libs";

export const Chart: FC<Props> = () => {
  return (
    <div className="h-[600px]">
      <ResponsiveContainer width="95%" height="95%">
        <LineChart
          data={data}
          margin={{
            top: 25,
            right: 9,
            left: 0,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#F89B1C" />
          <XAxis dataKey="day" tick={{ fill: "#0A2637" }} dy={15} />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dot={{ r: 5 }}
            strokeWidth={1.5}
            activeDot={{ r: 8, stroke: "#0A2637", fill: "#F89B1C" }}
            dataKey="people"
            stroke="#0A2637"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
