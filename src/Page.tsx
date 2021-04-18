import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Button,
  ButtonGroup,
  Typography,
} from "@material-ui/core";
import News from "./News";
import nytimesLogoLight from "./img/poweredby_nytimes_200a.png";

const Page: React.FC = () => {
  const [data, setData] = useState([]);

  const fetchArticles = async () => {
    console.log("fetchArticles called");
    try {
      const response = await fetch(
        "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=pnMUSKMgkVcBjlujv0UlFPPGt1eReYCf"
      );
      const data = await response.json();
      setData(data.results);
    } catch (error) {
      console.log(error);
      const data = [
        {
          title: "Sorry! We cannot fetch the news at the moment.",
          author: "",
          abstract: "Please try again later. :(",
          key: "",
        },
      ];
    }
  };

  useEffect(() => {
    console.log("useEffect Called");
    if (data.length === 0) fetchArticles();
  });

  return (
    <Container>
      <Typography variant="h1" component="h1" align="center">
        Read the news! 📰
      </Typography>
      <Grid container spacing={5} justify="center">
        <Grid item>
          <Button variant="contained" onClick={fetchArticles}>
            Get articles
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={5} justify="center">
        <Grid item>
          <ButtonGroup>
            <Button href="/">Light</Button>
            <Button href="dark">Dark</Button>
            <Button href="90s">90s Kids</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Grid container spacing={5} justify="center">
        {data.map((d: any) => {
          //console.log(d);
          return (
            <News
              title={d.title}
              author={d.byline}
              abstract={d.abstract}
              key={d.uri}
            />
          );
        })}
      </Grid>
      <Grid container spacing={5} justify="center">
        <Grid item>
          <img src={nytimesLogoLight} alt="Powered by New York Times" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Page;
