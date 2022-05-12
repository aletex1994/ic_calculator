import { Box } from "@mui/material";
import Logo from "../../assets/logo.png";

import * as React from "react";

function LogoDfinity() {
  return (
    <img
      style={{ height: "10vmin", display: "block", margin: "2rem 0" }}
      src={Logo}
      alt="Logo"
    />
  );
}

export default LogoDfinity;
