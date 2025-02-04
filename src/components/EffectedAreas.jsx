import * as React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Card, CardContent, Typography, Box } from "@mui/material";

const data = {
  Odisha: [
    { name: "Bhubaneswar", value: 50000 },
    { name: "Cuttack", value: 35000 },
    { name: "Rourkela", value: 10000 },
    { name: "Berhampur", value: 5000 },
  ],
  "West Bengal": [
    { name: "Kolkata", value: 40000 },
    { name: "Digha", value: 30000 },
    { name: "Sundarbans", value: 20000 },
    { name: "Howrah", value: 10000 },
  ],
  "Andhra Pradesh": [
    { name: "Vishakhapatnam", value: 45000 },
    { name: "Vijayawada", value: 35000 },
    { name: "Guntur", value: 15000 },
    { name: "Nellore", value: 5000 },
  ],
  "Tamil Nadu": [
    { name: "Chennai", value: 60000 },
    { name: "Coimbatore", value: 25000 },
    { name: "Madurai", value: 10000 },
    { name: "Tiruchirappalli", value: 5000 },
  ],
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const EffectedAreas = ({ selectedState }) => {
  if (!selectedState) return null;

  return (
    <Card
      sx={{
        width: "100%",
        margin: 2,
        backgroundColor: "#000000",
        borderRadius: 10,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.5)",
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
          Effected Areas in {selectedState}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <PieChart width={400} height={350}>
            <Pie
              data={data[selectedState]}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
            >
              {data[selectedState].map((entry, index) => (
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

export default EffectedAreas;
