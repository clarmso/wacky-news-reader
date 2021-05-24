import { useSelector } from "react-redux";

import { Grid, Typography } from "@material-ui/core";

import retroHeader from "./img/wordart.png";
import { WackyState } from "./connect/reducer";
import { formatDate } from "./utilities/date";
import About from "./About";

const Header: React.FC = () => {
  const is90s = useSelector((state: WackyState) => state.is90s);
  const date = useSelector((state: WackyState) => state.lastUpdated);
  return (
    <>
      <About />
      <Grid container spacing={5} justify="center">
        <Grid item>
          {is90s ? (
            <img src={retroHeader} alt="Wacky News Reader Header" />
          ) : (
            <Typography variant="h2" component="h1" align="center">
              🗞️ Wacky News Reader 🗞️
            </Typography>
          )}
          <Typography component="h6" align="center">
            {date && formatDate(date)}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
