import { useSelector } from "react-redux";

import { Grid } from "@material-ui/core";
import { WackyState } from "./connect/reducer";
import ie from "./img/ms-icon.gif";
import nytimesLogoLight from "./img/poweredby_nytimes_200a.png";

const Footer: React.FC = () => {
  const is90s = useSelector((state: WackyState) => state.is90s);
  return (
    <Grid container spacing={5} justify="center">
      <Grid item>
        <a href="https://developer.nytimes.com">
          <img src={nytimesLogoLight} alt="Powered by New York Times" />
        </a>
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
