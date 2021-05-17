import { lightTheme, darkTheme, ninetysTheme } from "../Theme";
import { SET_90S_MODE, SET_DARK_MODE, SET_LIGHT_MODE, SET_NEWS } from "./types";
import { NewsItemProps } from "../News";

export interface WackyState {
  is90s: boolean;
  theme: object;
  news: NewsItemProps[];
  lastUpdated: string;
}

export type WackyAction = {
  type: string;
  news: NewsItemProps[];
  lastUpdated: string;
};

const initialState: WackyState = {
  is90s: false,
  theme: lightTheme,
  news: [],
  lastUpdated: "",
};

const wackyReducer = (
  state: WackyState = initialState,
  action: WackyAction
) => {
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
    case SET_NEWS: {
      return {
        ...state,
        news: action.news,
        lastUpdated: action.lastUpdated,
      };
    }
    default:
      return state;
  }
};

export default wackyReducer;
