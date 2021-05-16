import React from "react";
import { Grid, Card, CardContent, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import newgif from "./img/new.gif";

export type NewsItemProps = {
  title: string;
  byline: string;
  abstract: string;
  updated_date: string;
  url: string;
  is90s?: boolean;
  uri?: string;
};

const useStyles = makeStyles({
  card: {
    width: 400,
    height: 340,
  },
});

const NewsItem: React.FC<NewsItemProps> = ({
  title,
  byline,
  updated_date,
  abstract,
  url,
  is90s,
}) => {
  const classes = useStyles();
  const formattedDate = new Intl.DateTimeFormat("default", {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(Date.parse(updated_date));
  return (
    <Grid item>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom={true}>
            {is90s && <img src={newgif} alt="New" />}
            <Link href={url} rel="noreferrer" target="_blank" color="inherit">
              {title}
            </Link>
          </Typography>
          <Typography variant="subtitle2" gutterBottom={true}>
            {byline}
          </Typography>
          <Typography variant="subtitle2" gutterBottom={true}>
            {formattedDate}
          </Typography>
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
    <Grid container spacing={2} justify="center">
      {data.map((d: NewsItemProps) => {
        return (
          <NewsItem
            title={d.title}
            byline={d.byline}
            updated_date={d.updated_date}
            abstract={d.abstract}
            url={d.url}
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
