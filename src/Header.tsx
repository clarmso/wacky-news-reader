import React from "react";
import { useSelector } from "react-redux";

import { Grid, Typography } from "@material-ui/core";

import retroHeader from "./img/wordart.png";
import { wackyState } from "./connect/reducer";

type HeaderProps = {
  date: string;
};

const Header: React.FC<HeaderProps> = ({ date }) => {
  const is90s = useSelector((state: wackyState) => state.is90s);
  return (
    <Grid container spacing={5} justify="center">
      <Grid item>
        {is90s ? (
          <img src={retroHeader} alt="Best viewed using Internet Explorer" />
        ) : (
          <Typography variant="h2" component="h1" align="center">
            🗞️ Wacky News Reader 🗞️
          </Typography>
        )}
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
      </Grid>
    </Grid>
  );
};

Header.defaultProps = {
  date: "",
};

export default Header;
