import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import productCurvyLines from "../../images/productCurvyLines.png";
import productValues1 from "../../images/productValues1.svg";
import productValues2 from "../../images/productValues2.svg";
import productValues3 from "../../images/productValues3.svg";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", overflow: "hidden", bgcolor: "secondary.light" }}
    >
      <Container sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}>
        <Box
          component="img"
          src={productCurvyLines}
          alt="curvy lines"
          sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={item}>
              <Box
                component="img"
                src={productValues1}
                alt="suitcase"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Best Comfort and Relaxation
              </Typography>
              <Typography variant="h5">
                {
                  "Stay in a fully-equipped holiday home with a private pool, perfect for family getaways and relaxation."
                }
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={item}>
              <Box
                component="img"
                src={productValues2}
                alt="graph"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Exclusive Experience
              </Typography>
              <Typography variant="h5">
                {
                  "Enjoy a peaceful retreat with a spacious terrace, ideal for dining or sunbathing, and a close connection to the beach and Zadar."
                }
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={item}>
              <Box
                component="img"
                src={productValues3}
                alt="clock"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Special Rates
              </Typography>
              <Typography variant="h5">
                {
                  "Book directly for exclusive deals and offers, ensuring you get the best value for your dream vacation."
                }
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
