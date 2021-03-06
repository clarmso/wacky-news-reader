import { Dispatch } from "react";

import { SET_90S_MODE, SET_LIGHT_MODE, SET_DARK_MODE, SET_NEWS } from "./types";
import { NewsItemProps } from "../News";
import { WackyAction } from "./reducer";

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

export const setNews = (
  news: NewsItemProps[],
  section: string,
  lastUpdated: string
) => {
  return {
    type: SET_NEWS,
    news: news,
    lastUpdated: lastUpdated,
    section: section,
  };
};

export const fetchArticles = (section: string) => {
  return async (dispatch: Dispatch<WackyAction>) => {
    try {
      dispatch(setNews([], section, ""));

      const url = new URL(
        `https://api.nytimes.com/svc/topstories/v2/${section}.json`
      );
      const apiKey = "" + process.env.REACT_APP_NYT_API_KEY;
      url.searchParams.append("api-key", apiKey);
      const response = await fetch(url.href);
      const data = await response.json();

      dispatch(setNews(data.results, section, data.last_updated));
    } catch (error) {
      console.log(error);
    }
  };
};
