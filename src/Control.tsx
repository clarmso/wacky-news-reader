import React from "react";

import { Grid, Radio, RadioGroup, FormControlLabel } from "@material-ui/core";

export const themeChoices = {
  LIGHT: "light",
  DARK: "dark",
  NINETYS: "90s",
};

type ControlProps = {
  themeChoice: string;
  handleChangeTheme: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Header: React.FC<ControlProps> = ({ themeChoice, handleChangeTheme }) => {
  return (
    <>
      <Grid container spacing={5} justify="center">
        <Grid item>
          <RadioGroup
            name="modes"
            value={themeChoice}
            onChange={handleChangeTheme}
            row
          >
            <FormControlLabel
              value={themeChoices.LIGHT}
              control={<Radio color="primary" />}
              label="Light Mode"
              data-cy="light-mode"
            />
            <FormControlLabel
              value={themeChoices.DARK}
              control={<Radio color="primary" />}
              label="Dark Mode"
              data-cy="dark-mode"
            />
            <FormControlLabel
              value={themeChoices.NINETYS}
              control={<Radio color="primary" />}
              label="90s Mode"
              data-cy="90s-mode"
            />
          </RadioGroup>
        </Grid>
      </Grid>
    </>
  );
};

Header.defaultProps = {
  themeChoice: themeChoices.LIGHT,
};

export default Header;
