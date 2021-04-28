import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import newgif from "./img/new.gif";

export type NewsProps = {
  title: string;
  byline: string;
  abstract: string;
  is90s?: boolean;
  uri?: string;
};

const News: React.FC<NewsProps> = ({ title, byline, abstract, is90s }) => {
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

export default News;
