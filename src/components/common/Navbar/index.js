import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../../../assets/images/logo2.png";
import styles from "./index.module.css";

const index = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: {
          sm: "32px",
          xs: "20px",
        },
        justifyContent: {
          xs: "space-between",
          lg: "flex-start",
        },
        px: "20px",
      }}
    >
      <Link to="/">
        <img className={styles.logo} src={Logo} alt="logo" />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="center">
        <Link to="/" className={styles.anchor}>
          Home
        </Link>
        <a className={styles.anchor} href="#exercises">
          Workouts
        </a>
        <Link to="/"></Link>
      </Stack>
    </Stack>
  );
};

export default index;
