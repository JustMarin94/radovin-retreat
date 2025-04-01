import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "../components/Button";
import Typography from "../components/Typography";
import productCurvyLines from "../../images/productCurvyLines.png";
import productHowItWorks1 from "../../images/productHowItWorks1.svg";
import productHowItWorks2 from "../../images/productHowItWorks2.svg";
import productHowItWorks3 from "../../images/productHowItWorks3.svg";
import { Link } from "react-router-dom";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: "default",
  color: "secondary.main",
  fontWeight: "medium",
};

const image = {
  height: 55,
  my: 4,
};

function ProductHowItWorks() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", bgcolor: "secondary.light", overflow: "hidden" }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={productCurvyLines}
          alt="curvy lines"
          sx={{
            pointerEvents: "none",
            position: "absolute",
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
          How it works
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={item}>
                <Box sx={number}>1.</Box>
                <Box
                  component="img"
                  src={productHowItWorks1}
                  alt="suitcase"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Browse open dates and plan your perfect getaway in Radovin.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={item}>
                <Box sx={number}>2.</Box>
                <Box
                  component="img"
                  src={productHowItWorks2}
                  alt="graph"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Reserve directly online—secure your spot with ease and get the
                  best rates.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>
                <Box
                  component="img"
                  src={productHowItWorks3}
                  alt="clock"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Arrive at your private retreat and unwind with family or
                  friends by the pool.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Button
          component={Link}
          to="/booking"
          color="secondary"
          size="large"
          variant="contained"
          href="/premium-themes/onepirate/sign-up/"
          sx={{ mt: 8 }}
        >
          Get started
        </Button>
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;
