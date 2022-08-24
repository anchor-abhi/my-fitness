import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/footerimg.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      gap="30px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "150px", height: "75px" }} />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "22px", xs: "18px" } }}
      mt="41px"
      textAlign="center"
      pb="40px"
    >
      Made with ❤️ by Abhishek
    </Typography>
  </Box>
);

export default Footer;
