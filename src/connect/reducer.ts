import { Action } from "redux";
import { lightTheme, darkTheme, ninetysTheme } from "../Theme";
import { SET_90S_MODE, SET_DARK_MODE, SET_LIGHT_MODE } from "./types";

export interface wackyState {
  is90s: boolean;
  theme: object;
}

const initialState: wackyState = {
  is90s: false,
  theme: lightTheme,
};

const wackyReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_90S_MODE: {
      return {
        ...state,
        is90s: true,
        theme: ninetysTheme,
      };
    }
    case SET_DARK_MODE: {
      return {
        ...state,
        is90s: false,
        theme: darkTheme,
      };
    }
    case SET_LIGHT_MODE: {
      return {
        ...state,
        is90s: false,
        theme: lightTheme,
      };
    }
    default:
      return state;
  }
};

export default wackyReducer;
