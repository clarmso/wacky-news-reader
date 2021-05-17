import React from "react";
import { useSelector } from "react-redux";
import { Grid, Card, CardContent, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import newgif from "./img/new.gif";
import { WackyState } from "./connect/reducer";
import { formatDate } from "./utilities/date";

export type NewsItemProps = {
  title: string;
  byline: string;
  abstract: string;
  updated_date: string;
  is90s: boolean;
  url: string;
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
  is90s,
  abstract,
  url,
}) => {
  const classes = useStyles();
  const formattedDate = formatDate(updated_date);
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

const News: React.FC = () => {
  const data = useSelector((state: WackyState) => state.news);
  const is90s = useSelector((state: WackyState) => state.is90s);
  return (
    <Grid container spacing={2} justify="center">
      {data &&
        data.map((d: NewsItemProps) => {
          return (
            <NewsItem
              title={d.title}
              byline={d.byline}
              updated_date={d.updated_date}
              abstract={d.abstract}
              is90s={is90s}
              url={d.url}
              key={d.uri}
            />
          );
        })}
    </Grid>
  );
};

export default News;
