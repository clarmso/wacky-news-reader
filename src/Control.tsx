import { Grid } from "@material-ui/core";

import SetSection from "./SetSection";
import SetTheme from "./SetTheme";

const Control: React.FC = () => {
  return (
    <Grid container spacing={5}>
      <SetSection />
      <Grid item xs={6} />
      <SetTheme />
    </Grid>
  );
};

export default Control;
