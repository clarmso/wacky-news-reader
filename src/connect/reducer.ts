import { lightTheme, darkTheme, ninetysTheme } from "../Theme";
import { themeChoices } from "../SetTheme";
import { SET_90S_MODE, SET_DARK_MODE, SET_LIGHT_MODE, SET_NEWS } from "./types";
import { NewsItemProps } from "../News";
import { sections } from "../Page";

export interface WackyState {
  is90s: boolean;
  theme: object;
  themeChoice: string;
  news: NewsItemProps[];
  section: string;
  lastUpdated: string;
}

export type WackyAction = {
  type: string;
  news: NewsItemProps[];
  section: string;
  lastUpdated: string;
};

export const initialState: WackyState = {
  is90s: false,
  theme: lightTheme,
  themeChoice: themeChoices.LIGHT,
  news: [],
  section: sections.WORLD,
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
        themeChoice: themeChoices.NINETYS,
      };
    }
    case SET_DARK_MODE: {
      return {
        ...state,
        is90s: false,
        theme: darkTheme,
        themeChoice: themeChoices.DARK,
      };
    }
    case SET_LIGHT_MODE: {
      return {
        ...state,
        is90s: false,
        theme: lightTheme,
        themeChoice: themeChoices.LIGHT,
      };
    }
    case SET_NEWS: {
      return {
        ...state,
        news: action.news,
        section: action.section,
        lastUpdated: action.lastUpdated,
      };
    }
    default:
      return state;
  }
};

export default wackyReducer;
