import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../../assets/icons/gym.png";
import styles from "./bodyPart.module.css";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type="button"
      alingnItems="center"
      justifyContent="center"
      className="bodyPart-card"
    >
      <img className={styles.bodyPartImage} src={Icon} alt="dumbell" />
      <Typography
        align="center"
        paragraph={true}
        sx={{ textTransform: "capitalize" }}
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
