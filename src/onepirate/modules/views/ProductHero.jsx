import * as React from "react";
import Button from "../components/Button";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";
import backgroundImage2 from "../../images/radovin-slike/cda998_pool_03.jpg";
import { Link } from "react-router-dom";

const backgroundImage =
  "https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400";

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage2})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Your Perfect Getaway
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        Enjoy your perfect getaway with a private pool, spacious terrace, and
        just a short drive to the beach and Zadar.
      </Typography>
      <Button
        component={Link}
        to="/booking"
        color="secondary"
        variant="contained"
        size="large"
        href="/premium-themes/onepirate/sign-up/"
        sx={{ minWidth: 200 }}
      >
        Book Your Stay
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the ideal vacation experience
      </Typography>
    </ProductHeroLayout>
  );
}
