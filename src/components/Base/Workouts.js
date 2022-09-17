import React, { useEffect, useState } from "react";
import { Pagination, Box, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../../utils/fetchData";

import ExerciseCard from "../ExerciseDetails/ExerciseCard";

const Workouts = ({ setExercises, exercises, setBodyPart }) => {
  const renderExercises = () => {
    return exercises.map((exercise, index) => (
      <ExerciseCard details={{ exercise }} key={index} />
    ));
  };
  return (
    <Box
      id="exercises"
      sx={{
        mt: {
          lg: "8rem",
          xs: "3rem",
        },
        p: "1rem",
      }}
    >
      <Typography variant="h4" color="initial" mb="3rem">
        Showing Results
      </Typography>

      <Stack
        direction="row"
        sx={{ gap: { lg: "8rem", xs: "3rem" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {renderExercises()}
      </Stack>
    </Box>
  );
};

export default Workouts;
