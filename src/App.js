import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import ExerciseDetals from "./components/ExerciseDetails";
import { StyledEngineProvider } from "@mui/material/styles";

import Landing from "./components/Base/Landing";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/exercise/:id" element={<ExerciseDetals />} />
        </Routes>
        <Footer />
      </Box>
    </StyledEngineProvider>
  );
};

export default App;
