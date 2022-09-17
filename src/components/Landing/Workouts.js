import React, { useEffect, useState } from "react";
import { Pagination, Box, Grid, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../../utils/fetchData";

import ExerciseCard from "../ExerciseDetails/ExerciseCard";
import { Stack } from "@mui/system";

const Workouts = ({ setExercises, exercises, setBodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexofFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexofFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: "1800", behavior: "smooth" });
  };

  const renderExercises = (exercises) => {
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
      {exercises.length > 0 && (
        <Typography variant="h4" color="initial" mb="3rem">
          Showing Results
        </Typography>
      )}
      <Grid container spacing={3}>
        {renderExercises(currentExercises)}
      </Grid>
      <Stack mt="5rem" alignItems="center">
        {exercises.length > exercisesPerPage && (
          <Pagination
            shape="rounded"
            count={Math.ceil(exercises.length / 9)}
            page={currentPage}
            // onChange={(event) => console.log(event.target.textContent)}
            onChange={(event, page) => paginate(event, page)}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Workouts;
