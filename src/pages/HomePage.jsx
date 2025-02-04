import React, { useState } from "react";
import EffectedStates from "../components/EffectedStates";
import EffectedAreas from "../components/EffectedAreas";
import { Box, Typography } from "@mui/material";
import PrecautionSection from "../components/PrecautionSection";
import BlogSection from "../components/BlogSection";

const HomePage = () => {
  const [selectedState, setSelectedState] = useState(null);

  const handleStateClick = (state) => {
    setSelectedState(state);
  };

  return (
    <Box
      sx={{
        padding: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          padding: 2,
        }}
      >
        {/* Left Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "50%",
            mt: 2,
          }}
        >
          <EffectedStates onStateClick={handleStateClick} />
          {selectedState ? (
            <EffectedAreas selectedState={selectedState} />
          ) : (
            <Typography
              variant="h6"
              sx={{ width: "100%", textAlign: "center" }}
            >
              Click on the state to see the effected areas
            </Typography>
          )}
        </Box>

        {/* Right Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            ml: 5,
          }}
        >
          <PrecautionSection />
        </Box>
      </Box>
      <BlogSection />
    </Box>
  );
};

export default HomePage;
