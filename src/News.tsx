import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import newgif from "./img/new.gif";

type NewsItemProps = {
  title: string;
  byline: string;
  abstract: string;
  is90s?: boolean;
  uri?: string;
};

const NewsItem: React.FC<NewsItemProps> = ({
  title,
  byline,
  abstract,
  is90s,
}) => {
  return (
    <Grid item>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            {is90s && <img src={newgif} alt="New" />}
            {title}
          </Typography>
          <Typography variant="caption">{byline}</Typography>
          <Typography variant="body1">{abstract}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

type NewsProps = {
  data: NewsItemProps[];
  is90s: boolean;
};

const News: React.FC<NewsProps> = ({ data, is90s }) => {
  return (
    <Grid container spacing={5} justify="center">
      {data.map((d: NewsItemProps) => {
        return (
          <NewsItem
            title={d.title}
            byline={d.byline}
            abstract={d.abstract}
            is90s={is90s}
            key={d.uri}
          />
        );
      })}
    </Grid>
  );
};

News.defaultProps = {
  data: [],
  is90s: false,
};

export default News;
