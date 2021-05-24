import { useSelector } from "react-redux";

import { Grid } from "@material-ui/core";
import RetroHitCounter from "react-retro-hit-counter";
import { WackyState } from "./connect/reducer";
import MyLink from "./MyLink";
import ie from "./img/ms-icon.gif";
import netscape from "./img/netscape.gif";
import nytimesLogoLight from "./img/poweredby_nytimes_200a.png";
import guestbook from "./img/guestbook.gif";
import divider from "./img/divider.gif";

const Footer: React.FC = () => {
  const is90s = useSelector((state: WackyState) => state.is90s);
  return (
    <>
      {is90s && (
        <Grid container spacing={5} justify="center">
          <Grid item>
            <img src={divider} alt="Divider at the footer" />
          </Grid>
        </Grid>
      )}
      <Grid container spacing={5} justify="center">
        <Grid item>
          <MyLink href="https://developer.nytimes.com">
            <img src={nytimesLogoLight} alt="Powered by New York Times" />
          </MyLink>
        </Grid>
        {is90s && (
          <>
            <Grid item>
              <img src={ie} alt="Best viewed using Internet Explorer" />
            </Grid>
            <Grid item>
              <img src={netscape} alt="Download netscape now" />
            </Grid>
            <Grid item>
              <RetroHitCounter hits={1337} />
            </Grid>
            <Grid item>
              <MyLink href="https://clarmso.typeform.com/to/BW4tWf">
                <img src={guestbook} alt="Sign our guestbook" />
              </MyLink>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};

export default Footer;
