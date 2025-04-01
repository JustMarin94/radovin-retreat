import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";

// Styled ButtonRoot with conditional size-based styling
const ButtonRoot = styled(MuiButton)(({ theme, size }) => ({
  borderRadius: 0,
  fontWeight: theme.typography.fontWeightMedium,
  fontFamily: theme.typography.h1.fontFamily,
  padding:
    size === "small"
      ? theme.spacing(1, 3)
      : size === "large"
      ? theme.spacing(2, 5)
      : theme.spacing(2, 4),
  fontSize:
    size === "small"
      ? theme.typography.pxToRem(13)
      : size === "large"
      ? theme.typography.pxToRem(16)
      : theme.typography.pxToRem(14),
  boxShadow: "none",
  "&:active, &:focus": {
    boxShadow: "none",
  },
}));

// The Button component that uses the styled ButtonRoot
function Button(props) {
  return <ButtonRoot {...props} />;
}

export default Button;
