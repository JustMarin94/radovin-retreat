import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

const ImageBackdrop = styled("div")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: "#000",
  opacity: 0.1,
  transition: theme.transitions.create("opacity"),
}));

const ImageIconButton = styled("div")(({ theme }) => ({
  position: "relative",
  display: "block",
  padding: 0,
  borderRadius: 0,
  width: "33%",
  paddingTop: "33%",
  height: 0,
  [theme.breakpoints.down("md")]: {
    width: "100% !important",
    paddingTop: "100%",
  },
  "& .imageMarked": {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

const images = [
  {
    url: new URL(
      "../../images/radovin-slike/cda998_pool_01.jpg",
      import.meta.url
    ).href,
    title: "Pool 01",
    width: "40%",
  },
  {
    url: new URL(
      "../../images/radovin-slike/cda998_bed_02.jpg",
      import.meta.url
    ).href,
    title: "Bed 02",
    width: "40%",
  },
  {
    url: new URL(
      "../../images/radovin-slike/cda998_pool_02.jpg",
      import.meta.url
    ).href,
    title: "Pool 02",
    width: "20%",
  },
  {
    url: new URL(
      "../../images/radovin-slike/cda998_bed_02.jpg",
      import.meta.url
    ).href,
    title: "Bed 09",
    width: "40%",
  },
  {
    url: new URL(
      "../../images/radovin-slike/cda998_pool_03.jpg",
      import.meta.url
    ).href,
    title: "Pool 03",
    width: "40%",
  },
  {
    url: new URL(
      "../../images/radovin-slike/cda998_bed_01.jpg",
      import.meta.url
    ).href,
    title: "Bed 01",
    width: "24%",
  },
  {
    url: new URL(
      "../../images/radovin-slike/cda998_pool_04.jpg",
      import.meta.url
    ).href,
    title: "Pool 04",
    width: "38%",
  },
  {
    url: new URL(
      "../../images/radovin-slike/cda998_bed_03.jpg",
      import.meta.url
    ).href,
    title: "Bed 03",
    width: "20%",
  },
  {
    url: new URL(
      "../../images/radovin-slike/cda998_pool_05.jpg",
      import.meta.url
    ).href,
    title: "Pool 05",
    width: "38%",
  },
  {
    url: new URL(
      "../../images/radovin-slike/cda998_bed_04.jpg",
      import.meta.url
    ).href,
    title: "Bed 04",
    width: "40%",
  },
  {
    url: new URL(
      "../../images/radovin-slike/cda998_outdoor_02.jpg",
      import.meta.url
    ).href,
    title: "Outdoor 02",
    width: "38%",
  },
  {
    url: new URL(
      "../../images/radovin-slike/cda998_bed_06.jpg",
      import.meta.url
    ).href,
    title: "Bed 06",
    width: "38%",
  },
  {
    url: new URL(
      "../../images/radovin-slike/cda998_outdoor_04.jpg",
      import.meta.url
    ).href,
    title: "Outdoor 04",
    width: "40%",
  },
  {
    url: new URL(
      "../../images/radovin-slike/cda998_outdoor_01.jpg",
      import.meta.url
    ).href,
    title: "Outdoor 01",
    width: "38%",
  },
  {
    url: new URL(
      "../../images/radovin-slike/cda998_outdoor_03.jpg",
      import.meta.url
    ).href,
    title: "Outdoor 03",
    width: "24%",
  },
  {
    url: new URL(
      "../../images/radovin-slike/cda998_indoor_01.jpg",
      import.meta.url
    ).href,
    title: "Indoor 01",
    width: "40%",
  },
  {
    url: new URL(
      "../../images/radovin-slike/cda998_outdoor_06.jpg",
      import.meta.url
    ).href,
    title: "Outdoor 06",
    width: "20%",
  },
  {
    url: new URL(
      "../../images/radovin-slike/cda998_bed_05.jpg",
      import.meta.url
    ).href,
    title: "Bed 05",
    width: "38%",
  },
  {
    url: new URL(
      "../../images/radovin-slike/cda998_main_01.jpg",
      import.meta.url
    ).href,
    title: "Main 01",
    width: "20%",
  },
  {
    url: new URL(
      "../../images/radovin-slike/cda998_indoor_02.jpg",
      import.meta.url
    ).href,
    title: "Indoor 02",
    width: "38%",
  },
  {
    url: new URL(
      "../../images/radovin-slike/cda998_outdoor_05.jpg",
      import.meta.url
    ).href,
    title: "Outdoor 05",
    width: "40%",
  },
  {
    url: new URL(
      "../../images/radovin-slike/cda998_living_01.jpg",
      import.meta.url
    ).href,
    title: "Living 01",
    width: "40%",
  },
  {
    url: new URL(
      "../../images/radovin-slike/cda998_bath_01.jpg",
      import.meta.url
    ).href,
    title: "Bath 01",
    width: "20%",
  },
  {
    url: new URL(
      "../../images/radovin-slike/cda998_living_02.jpg",
      import.meta.url
    ).href,
    title: "Living 02",
    width: "40%",
  },
  {
    url: new URL(
      "../../images/radovin-slike/cda998_kitchen_02.jpg",
      import.meta.url
    ).href,
    title: "Kitchen 02",
    width: "24%",
  },
  {
    url: new URL(
      "../../images/radovin-slike/cda998_bath_04.jpg",
      import.meta.url
    ).href,
    title: "Bath 04",
    width: "38%",
  },
  {
    url: new URL(
      "../../images/radovin-slike/cda998_kitchen_01.jpg",
      import.meta.url
    ).href,
    title: "Kitchen 01",
    width: "38%",
  },
  {
    url: new URL(
      "../../images/radovin-slike/cda998_activity_02.jpg",
      import.meta.url
    ).href,
    title: "Activity 02",
    width: "40%",
  },
  {
    url: new URL(
      "../../images/radovin-slike/cda998_bath_02.jpg",
      import.meta.url
    ).href,
    title: "Bath 02",
    width: "40%",
  },
  {
    url: new URL(
      "../../images/radovin-slike/cda998_outdoor_09.jpg",
      import.meta.url
    ).href,
    title: "Outdoor 09",
    width: "24%",
  },
];

function adjustWidths(images) {
  const pattern = ["33%", "33%", "33%"];
  let adjustedWidths = [];

  for (let i = 0; i < images.length; i++) {
    adjustedWidths.push(pattern[i % pattern.length]); // Cycle through the pattern
  }

  // Update the images array with the adjusted widths
  for (let i = 0; i < images.length; i++) {
    images[i].width = adjustedWidths[i];
  }

  return images;
}

const adjustedImages = adjustWidths(images);

export default function ProductCategories() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
        For all tastes and all desires
      </Typography>
      <Box sx={{ mt: 8, display: "flex", flexWrap: "wrap" }}>
        {adjustedImages.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: "cover",
                backgroundPosition: "center 40%",
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "common.white",
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              ></Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}
