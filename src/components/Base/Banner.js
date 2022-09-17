import React from "react";
import { Box, Typography, Button } from "@mui/material";
import BannerImage from "../../assets/images/banner.png";
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
        I will workout &nbsp;<br></br>
        <span className={styles.strikeThrough}>tomorrow</span>
        &nbsp; Now!
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
