import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../../assets/icons/gym.png";
import styles from "./bodyPart.module.css";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      onClick={() => setBodyPart(item)}
      type="button"
      alingnItems="center"
      justifyContent="center"
    >
      <img className={styles.bodyPartImage} src={Icon} alt="dumbell" />
      <Typography
        mt="0.5rem"
        align="center"
        paragraph={true}
        variant="h6"
        sx={{ textTransform: "capitalize" }}
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
