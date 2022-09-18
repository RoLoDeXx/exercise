import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";
import CountUp from "react-countup";

const SearchExercise = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  const handleSearch = async (query) => {
    const res = await fetchData(
      `${process.env.REACT_APP_API_BASE}/exercises`,
      exerciseOptions
    );

    console.log(query);

    const filteredResponse = res.filter((exercise) => {
      return (
        exercise.name.toLowerCase().includes(query.toLowerCase()) ||
        exercise.target.toLowerCase().includes(query.toLowerCase()) ||
        exercise.equipment.toLowerCase().includes(query.toLowerCase()) ||
        exercise.bodyPart.toLowerCase().includes(query.toLowerCase())
      );
    });
    setExercises(filteredResponse);
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

  useEffect(() => {
    if (bodyPart !== "all") {
      handleSearch(bodyPart);
    }
  }, [bodyPart]);

  return (
    <Stack alignItems="center" mt="3rem" justifyContent="center">
      <Typography
        color="initial"
        sx={{
          fontSize: {
            lg: "2.25rem",
            xs: "1.75rem",
          },
          px: "20px",
          mb: "5rem",
          textAlign: "left",
        }}
      >
        Eliminate confusion about your next workout with MeFit.
        <br />
        Search in our curated list of over <CountUp end={1300} />+ movements to
        provide top-of-the-line professional exercise content..
      </Typography>
      <Box position="relative" mb="6rem">
        <TextField
          sx={{
            input: { border: "none", borderRadius: "4px" },
            width: {
              lg: "900px",
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
          onClick={() => handleSearch(search)}
          className="search-btn"
          sx={{
            background: "#f6cd13",
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
