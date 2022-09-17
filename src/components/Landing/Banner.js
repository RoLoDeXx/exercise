import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Typewriter from "typewriter-effect";
import BannerImage from "../../assets/images/banner2.jpg";
import styles from "./banner.module.css";

const Banner = () => {
  return (
    <Box
      className={styles.wrapper}
      sx={{
        mt: {
          lg: "212px",
          xs: "70px",
        },
        ml: {
          sm: "50px",
        },
      }}
    >
      <Typography className={styles.bannerHead}>Fit 4 Fitness</Typography>

      <Typography className={styles.quotedText} sx={{ mt: "4rem" }}>
        Search for: <br />
        <Typewriter
          options={{
            strings: [
              "Chest exercises",
              "Body weight exercises",
              "Squat",
              "Biceps",
              "Cardio",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </Typography>

      <Button
        href="#exercises"
        variant="contained"
        className={styles.bannerButton}
      >
        Workout Generator
      </Button>
      <Typography
        className={styles.backdrop}
        sx={{
          opacity: 0.1,
          display: {
            lg: "block",
            xs: "none",
          },
        }}
      >
        WORKOUT
      </Typography>
      <img src={BannerImage} alt="Banner" className={"hero-banner-img"} />
    </Box>
  );
};

export default Banner;
