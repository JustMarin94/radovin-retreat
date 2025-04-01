import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppBar from "../components/AppBar";
import Toolbar from "../components/Toolbar";

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="black"
            href="/"
            sx={{ fontSize: 24 }}
          >
            {"Holiday Home Radovin"}
          </Link>
          <Box
            sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}
          ></Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
