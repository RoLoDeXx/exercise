import React from "react";
import { Stack, Typography } from "@mui/material";
import armsIcon from "../../assets/icons/arms.png";
import backIcon from "../../assets/icons/back.png";
import chestIcon from "../../assets/icons/chest.png";
import cardioIcon from "../../assets/icons/cardio.png";
import shouldersIcon from "../../assets/icons/shoulders.png";
import neckIcon from "../../assets/icons/neck.png";
import legsIcon from "../../assets/icons/leg.png";
import waistIcon from "../../assets/icons/waist.png";

import styles from "./bodyPart.module.css";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  const renderIconImage = (bodyPartName) => {
    if (bodyPartName.includes("arms")) {
      return (
        <img className={styles.bodyPartImage} src={armsIcon} alt="dumbell" />
      );
    } else if (bodyPartName.includes("back")) {
      return (
        <img className={styles.bodyPartImage} src={backIcon} alt="dumbell" />
      );
    } else if (bodyPartName.includes("cardio")) {
      return (
        <img className={styles.bodyPartImage} src={cardioIcon} alt="dumbell" />
      );
    } else if (bodyPartName.includes("shoulders")) {
      return (
        <img
          className={styles.bodyPartImage}
          src={shouldersIcon}
          alt="dumbell"
        />
      );
    } else if (bodyPartName.includes("neck")) {
      return (
        <img className={styles.bodyPartImage} src={neckIcon} alt="dumbell" />
      );
    } else if (bodyPartName.includes("chest")) {
      return (
        <img className={styles.bodyPartImage} src={chestIcon} alt="dumbell" />
      );
    } else if (bodyPartName.includes("legs")) {
      return (
        <img className={styles.bodyPartImage} src={legsIcon} alt="dumbell" />
      );
    } else if (bodyPartName.includes("waist")) {
      return (
        <img className={styles.bodyPartImage} src={waistIcon} alt="dumbell" />
      );
    }
  };

  return (
    <Stack
      onClick={() => setBodyPart(item)}
      type="button"
      alingnItems="center"
      justifyContent="center"
    >
      {renderIconImage(item)}
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
