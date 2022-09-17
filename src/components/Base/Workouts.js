import React, { useEffect, useState } from "react";
import { Pagination, Box, Grid, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../../utils/fetchData";

import ExerciseCard from "../ExerciseDetails/ExerciseCard";
import { Stack } from "@mui/system";

const Workouts = ({ setExercises, exercises, setBodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

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

      <Grid container spacing={3}>
        {renderExercises()}
      </Grid>
      <Stack mt="5rem" alignItems="center">
        {exercises.length > exercisesPerPage && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage="1"
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Workouts;
