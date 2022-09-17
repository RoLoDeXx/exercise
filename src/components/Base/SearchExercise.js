import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

const SearchExercise = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  const handleSearch = async () => {
    const res = await fetchData(
      `${process.env.REACT_APP_API_BASE}/exercises`,
      exerciseOptions
    );

    const filteredResponse = res.filter((exercise) => {
      return (
        exercise.name.toLowerCase().includes(search.toLowerCase()) ||
        exercise.target.toLowerCase().includes(search.toLowerCase()) ||
        exercise.equipment.toLowerCase().includes(search.toLowerCase()) ||
        exercise.bodyPart.toLowerCase().includes(search.toLowerCase())
      );
    });
    setExercises(filteredResponse);
    setSearch("");
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsExercises = await fetchData(
        `${process.env.REACT_APP_API_BASE}/exercises/bodyPartList`,
        exerciseOptions
      );

      setBodyParts([...bodyPartsExercises]);
    };
    fetchExercisesData();
  }, []);

  return (
    <Stack alignItems="center" mt="3rem" justifyContent="center" p="1rem">
      <Typography
        color="initial"
        sx={{
          fontSize: {
            lg: "4rem",
            xs: "2rem",
          },
          mb: "5rem",
          textAlign: "center",
        }}
      >
        Confused about what should you do in the gym?
        <br /> Why don't you search in our database.
      </Typography>
      <Box position="relative" mb="6rem">
        <TextField
          sx={{
            input: { border: "none", borderRadius: "4px" },
            width: {
              lg: "800px",
              xs: "100%",
            },
            backgroundColor: "#fffff",
            borderRadius: "40px",
          }}
          height="6rem"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          onClick={handleSearch}
          className="search-btn"
          sx={{
            background: "#ff2625",
            color: "#ffffff",
            textTransform: "none",
            width: {
              lg: "10rem",
              xs: "100%",
            },
            fontSize: {
              lg: "1.25rem",
              xs: "1rem",
            },
            height: "56px",
            position: {
              // md: "absolute",
              right: "0",
            },
          }}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "1.25rem" }}>
        <HorizontalScrollBar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercise;
