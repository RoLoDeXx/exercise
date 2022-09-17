import React, { useState } from "react";
import { Box } from "@mui/material";
import Banner from "./Banner";
import SearchExercise from "./SearchExercise";
import Workouts from "./Workouts";

const Landing = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  return (
    <Box>
      <Banner />
      <SearchExercise
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Workouts
        setExercises={setExercises}
        exercises={exercises}
        setBodyPart={setBodyPart}
      />
    </Box>
  );
};

export default Landing;
