import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";

export type NewsProps = {
  title: string;
  byline: string;
  abstract: string;
  uri: string;
};

const News: React.FC<NewsProps> = ({
  title,
  byline,
  abstract,
  uri,
}: NewsProps) => {
  //console.log(`title: ${title} | author: ${author} | abstract: ${abstract}`);
  return (
    <Grid item>
      <Card>
        <CardContent>
          <Typography variant="h3" component="h3">
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
