import * as React from "react";
import { Box, Grid, Card, CardContent, Typography } from "@mui/material";

const cardData = [
  {
    tag: "Safety",
    title: "Precaution 1",
    description: "Stay indoors and away from windows.",
    authors: ["Author 1"],
  },
  {
    tag: "Preparation",
    title: "Precaution 2",
    description: "Keep emergency supplies handy.",
    authors: ["Author 2"],
  },
  {
    tag: "Information",
    title: "Precaution 3",
    description: "Follow official instructions and updates.",
    authors: ["Author 3"],
  },
  {
    tag: "Evacuation",
    title: "Precaution 4",
    description: "Evacuate if advised by authorities.",
    authors: ["Author 4"],
  },
  {
    tag: "Evacuation",
    title: "Precaution 4",
    description: "Evacuate if advised by authorities.",
    authors: ["Author 4"],
  },
  {
    tag: "Evacuation",
    title: "Precaution 4",
    description: "Evacuate if advised by authorities.",
    authors: ["Author 4"],
  },
  {
    tag: "Evacuation",
    title: "Precaution 4",
    description: "Evacuate if advised by authorities.",
    authors: ["Author 4"],
  },
  {
    tag: "Evacuation",
    title: "Precaution 4",
    description: "Evacuate if advised by authorities.",
    authors: ["Author 4"],
  },
  {
    tag: "Evacuation",
    title: "Precaution 4",
    description: "Evacuate if advised by authorities.",
    authors: ["Author 4"],
  },
  {
    tag: "Evacuation",
    title: "Precaution 4",
    description: "Evacuate if advised by authorities.",
    authors: ["Author 4"],
  },
];

const PrecautionSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
        mt: 4,
      }}
    >
      <Box>
        <Typography variant="h2" gutterBottom>
          Precautions
        </Typography>
        <Typography>
          Keep these precautions in your mind to stay safe from cyclones.
        </Typography>
      </Box>

      {/* Display cards without scrolling */}
      <Grid container spacing={2}>
        {cardData.map((card, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card variant="outlined">
              <CardContent>
                <Typography gutterBottom variant="caption" component="div">
                  {card.tag}
                </Typography>
                <Typography gutterBottom variant="h6">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {card.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.authors.join(", ")}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PrecautionSection;
