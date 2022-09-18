import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../../../assets/images/logo2.png";

const index = () => (
  <Box mt="80px" bgcolor="#f6cd139e">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "auto", height: "3rem" }} />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "1rem" } }}
      mt="41px"
      textAlign="center"
      pb="40px"
    >
      Made with ❤️ by Samarth Sharma
    </Typography>
  </Box>
);

export default index;
