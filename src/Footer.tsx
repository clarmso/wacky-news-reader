import React from "react";
import { useSelector } from "react-redux";

import { Grid } from "@material-ui/core";
import { darkTheme } from "./Theme";
import { wackyState } from "./connect/reducer";
import ie from "./img/ms-icon.gif";
import nytimesLogoLight from "./img/poweredby_nytimes_200a.png";
import nytimesLogoDark from "./img/poweredby_nytimes_200c.png";

const Footer: React.FC = () => {
  const is90s = useSelector((state: wackyState) => state.is90s);
  const themeChoice = useSelector((state: wackyState) => state.theme);

  return (
    <Grid container spacing={5} justify="center">
      <Grid item>
        {themeChoice === darkTheme ? (
          <img src={nytimesLogoDark} alt="Powered by New York Times" />
        ) : (
          <img src={nytimesLogoLight} alt="Powered by New York Times" />
        )}
      </Grid>
      {is90s && (
        <Grid item>
          <img src={ie} alt="Best viewed using Internet Explorer" />
        </Grid>
      )}
    </Grid>
  );
};

export default Footer;
