import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./exerciseCard.module.css";
import {
  Grid,
  Chip,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const ExerciseCard = ({ details }) => {
  return (
    // <Link className={styles.detailsCard} to={`/details/${details.exercise.id}`}>

    <Grid item xs={12} md={6} lg={4} xl={3}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardMedia
          loading="lazy"
          component="img"
          height="400"
          image={details.exercise.gifUrl}
          alt={details.exercise.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {details.exercise.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Note: This exercises requires <b>{details.exercise.equipment}</b>.
          </Typography>
        </CardContent>
        <CardActions sx={{ p: "1rem" }}>
          <Chip
            label={details.exercise.bodyPart}
            variant="filled"
            color="error"
            onClick={() => {}}
          />
          <Chip
            label={details.exercise.target}
            variant="filled"
            color="warning"
            onClick={() => {}}
          />
        </CardActions>
      </Card>
    </Grid>

    // </Link>
  );
};

export default ExerciseCard;
