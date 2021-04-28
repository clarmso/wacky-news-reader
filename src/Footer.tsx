import React from "react";

import { Grid } from "@material-ui/core";

import ie from "./img/ms-icon.gif";
import nytimesLogoLight from "./img/poweredby_nytimes_200a.png";
import nytimesLogoDark from "./img/poweredby_nytimes_200c.png";

type FooterProps = {
  themeChoice: string;
  is90s: boolean;
};

const Footer: React.FC<FooterProps> = ({ themeChoice, is90s }) => {
  return (
    <Grid container spacing={5} justify="center">
      <Grid item>
        {themeChoice === "dark" ? (
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
