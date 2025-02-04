import * as React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Card, CardContent, Typography, Box } from "@mui/material";

const data = [
  { name: "Odisha", value: 50000 },
  { name: "West Bengal", value: 35000 },
  { name: "Andhra Pradesh", value: 10000 },
  { name: "Tamil Nadu", value: 5000 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const EffectedStates = ({ onStateClick }) => {
  return (
    <Card
      sx={{
        width: "100%",
        margin: 2,
        borderRadius: 10,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.5)",
        backgroundColor: "#000000",
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          sx={{
            color: "#fe6807",
            fontFamily: "monospace",
            textAlign: "center",
          }}
        >
          Effected States
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <PieChart width={400} height={350}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
              onClick={(data, index) => onStateClick(data.name)}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </Box>
      </CardContent>
    </Card>
  );
};

export default EffectedStates;
