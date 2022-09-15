import React, { useState } from "react";
import { Box } from "@mui/material";
import Banner from "./Banner";
import SearchExercise from "./SearchExercise";
import Workouts from "./Workouts";

const index = () => {
  return (
    <Box>
      <Banner />
      <SearchExercise />
      <Workouts />
    </Box>
  );
};

export default index;
