import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Grid,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
} from "@material-ui/core";

import { set90sMode, setLightMode, setDarkMode } from "./connect/actions";
import { WackyState } from "./connect/reducer";

export const themeChoices = {
  LIGHT: "light",
  DARK: "dark",
  NINETYS: "90s",
};

const SetTheme: React.FC = () => {
  const theme = useSelector((state: WackyState) => state.themeChoice);
  const [themeChoice, setThemeChoice] = useState(theme);

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
    <Grid item xs>
      <FormControl>
        <FormLabel component="legend">Mode</FormLabel>
        <RadioGroup
          name="modes"
          value={themeChoice}
          onChange={handleChangeTheme}
          row
        >
          <FormControlLabel
            value={themeChoices.LIGHT}
            control={<Radio color="primary" />}
            label="Light"
            data-cy="light-mode"
          />
          <FormControlLabel
            value={themeChoices.DARK}
            control={<Radio color="primary" />}
            label="Dark"
            data-cy="dark-mode"
          />
          <FormControlLabel
            value={themeChoices.NINETYS}
            control={<Radio color="primary" />}
            label="90s 🎉"
            data-cy="90s-mode"
          />
        </RadioGroup>
      </FormControl>
    </Grid>
  );
};

export default SetTheme;
