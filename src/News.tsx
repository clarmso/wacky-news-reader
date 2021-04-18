import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";

type NewsProps = {
  title: string;
  author: string;
  abstract: string;
};

const News: React.FC<NewsProps> = ({ title, author, abstract }: NewsProps) => {
  //console.log(`title: ${title} | author: ${author} | abstract: ${abstract}`);
  return (
    <Grid item>
      <Card>
        <CardContent>
          <Typography variant="h3" component="h3">
            {title}
          </Typography>
          <Typography variant="caption">{author}</Typography>
          <Typography variant="body1">{abstract}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default News;
