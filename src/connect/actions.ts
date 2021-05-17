import { SET_90S_MODE, SET_LIGHT_MODE, SET_DARK_MODE } from "./types";

export const set90sMode = () => {
  return {
    type: SET_90S_MODE,
  };
};

export const setLightMode = () => {
  return {
    type: SET_LIGHT_MODE,
  };
};

export const setDarkMode = () => {
  return {
    type: SET_DARK_MODE,
  };
};
