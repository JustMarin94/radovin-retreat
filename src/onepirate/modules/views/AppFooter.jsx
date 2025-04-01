import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import appFooterFacebook from "../../images/appFooterFacebook.png";
import appFooterTwitter from "../../images/appFooterTwitter.png";

function Copyright() {
  return (
    <React.Fragment>
      {"© "}
      <Link color="inherit" href="https://mui.com/">
        Radovin Retreat
      </Link>{" "}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "warning.main",
  mr: 1,
  "&:hover": {
    bgcolor: "warning.dark",
  },
};

export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: "flex", bgcolor: "secondary.light" }}
    >
      <Container sx={{ my: 8, display: "flex" }}>
        <Grid container spacing={5}>
          <Grid>
            <Grid
              container
              direction="column"
              spacing={2}
              sx={{ justifyContent: "flex-end", height: 120 }}
            >
              <Grid sx={{ display: "flex" }}>
                <Box component="a" href="https://mui.com/" sx={iconStyle}>
                  <img src={appFooterFacebook} alt="Facebook" />
                </Box>
                <Box component="a" href="https://x.com/MUI_hq" sx={iconStyle}>
                  <img src={appFooterTwitter} alt="X" />
                </Box>
              </Grid>
              <Grid>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
