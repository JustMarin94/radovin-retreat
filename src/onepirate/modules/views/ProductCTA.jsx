import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

function ProductCTA() {
  const testimonials = [
    {
      quote:
        "Absolutely amazing experience! The service was top-notch, and I felt like I was on a dream vacation.",
      name: "Sarah M.",
    },
    {
      quote:
        "I had no idea such a gem was so close to home. The atmosphere, the staff, everything was perfect!",
      name: "David L.",
    },
  ];

  return (
    <Container
      component="section"
      sx={{ mt: 10, display: "flex", justifyContent: "center", maxWidth: 1200 }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ zIndex: 3 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              bgcolor: "warning.main",
              py: 8,
              px: 3,
              width: { xs: "100%", sm: 400, md: 600 }, // Responsive width
              maxWidth: "100%", // Ensure it doesn't overflow
              boxSizing: "border-box",
            }}
          >
            <Typography variant="h2" component="h2" gutterBottom>
              Happy Customers
            </Typography>
            {testimonials.map((testimonial, index) => (
              <Box
                key={index}
                sx={{
                  mt: 3,
                  textAlign: "center",
                  maxWidth: { xs: "100%", sm: 350 }, // Adjust content width
                }}
              >
                <Typography variant="h6" sx={{ fontStyle: "italic" }}>
                  "{testimonial.quote}"
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", mt: 1 }}
                >
                  — {testimonial.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: { md: "block", xs: "none" }, // Hide image on mobile
            position: "relative",
          }}
        >
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?auto=format&fit=crop&w=750"
            alt="customer experience"
            sx={{
              position: "absolute",
              top: -28,
              left: { md: 250 }, // Only apply offset on medium screens+
              width: { md: 600, sm: 400, xs: "100%" }, // Responsive image width
              maxWidth: "100%", // Prevent overflow
              height: "auto", // Maintain aspect ratio
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductCTA;
