import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import newgif from "./img/new.gif";

export type NewsProps = {
  title: string;
  byline: string;
  abstract: string;
  hasGifs?: boolean;
  uri?: string;
};

const News: React.FC<NewsProps> = ({ title, byline, abstract, hasGifs }) => {
  return (
    <Grid item>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            {hasGifs && <img src={newgif} alt="Powered by New York Times" />}
            {title}
          </Typography>
          <Typography variant="caption">{byline}</Typography>
          <Typography variant="body1">{abstract}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default News;
