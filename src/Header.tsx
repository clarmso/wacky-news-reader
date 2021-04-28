import React from "react";

import { Typography } from "@material-ui/core";

type HeaderProps = {
  date: string;
};

const Header: React.FC<HeaderProps> = ({ date }) => {
  return (
    <>
      <Typography variant="h2" component="h1" align="center">
        🗞️ Wacky News Reader 🗞️
      </Typography>
      <Typography component="h6" align="center">
        {date &&
          new Intl.DateTimeFormat("default", {
            hour: "numeric",
            minute: "numeric",
            day: "numeric",
            month: "long",
            year: "numeric",
            weekday: "long",
          }).format(Date.parse(date))}
      </Typography>
    </>
  );
};

Header.defaultProps = {
  date: "",
};

export default Header;
