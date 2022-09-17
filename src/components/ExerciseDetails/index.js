import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { exerciseOptions, fetchData } from "../../utils/fetchData";

const index = () => {
  // const { id } = useParams();

  return (
    <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
      {/* <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      /> */}
    </Box>
  );
};

export default index;
