import { useState } from "react";
import { useDispatch } from "react-redux";

import { Grid, Radio, RadioGroup, FormControlLabel } from "@material-ui/core";

import { set90sMode, setLightMode, setDarkMode } from "./connect/actions";

export const themeChoices = {
  LIGHT: "light",
  DARK: "dark",
  NINETYS: "90s",
};

const SetTheme: React.FC = () => {
  const [themeChoice, setThemeChoice] = useState(themeChoices.LIGHT);

  const dispatch = useDispatch();

  const handleChangeTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = event.target.value;
    switch (selected) {
      case themeChoices.NINETYS:
        dispatch(set90sMode());
        setThemeChoice(themeChoices.NINETYS);
        break;
      case themeChoices.DARK:
        dispatch(setDarkMode());
        setThemeChoice(themeChoices.DARK);
        break;
      case themeChoices.LIGHT:
        dispatch(setLightMode());
        setThemeChoice(themeChoices.LIGHT);
        break;
      default:
        dispatch(setLightMode());
        setThemeChoice(themeChoices.LIGHT);
    }
  };

  return (
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
  );
};

export default SetTheme;
