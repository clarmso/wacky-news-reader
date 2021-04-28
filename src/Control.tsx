import React from "react";

import { Grid, Radio, RadioGroup, FormControlLabel } from "@material-ui/core";

export type ControlProps = {
  choice: string;
  handleChangeTheme: any;
};

const Header: React.FC<ControlProps> = ({ choice, handleChangeTheme }) => {
  return (
    <Grid container spacing={10} justify="center">
      <Grid item>
        <RadioGroup
          name="modes"
          value={choice}
          onChange={handleChangeTheme}
          row
        >
          <FormControlLabel
            value={"light"}
            control={<Radio color="primary" />}
            label="Light Mode"
          />
          <FormControlLabel
            value={"dark"}
            control={<Radio color="primary" />}
            label="Dark Mode"
          />
          <FormControlLabel
            value={"90s"}
            control={<Radio color="primary" />}
            label="90s Mode"
          />
        </RadioGroup>
      </Grid>
    </Grid>
  );
};

export default Header;
