import React from "react";

import { Typography } from "@material-ui/core";

export type HeaderProps = {
  date: string;
};

const Header: React.FC<HeaderProps> = ({ date }) => {
  return (
    <>
      <Typography variant="h2" component="h1" align="center">
        🗞️ Wacky News Reader 🗞️
      </Typography>
      <Typography component="h6" align="center">
        Last Updated: {date}
      </Typography>
    </>
  );
};

export default Header;
