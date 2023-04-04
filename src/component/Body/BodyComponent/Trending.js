import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Link } from "@mui/material";
const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 24,
    marginBottom: 32,
  },
  contentLink: {
    color: "black",
    textDecoration: "none",
  },
  info: {
    padding: 40,
  },
  trendingName: {
    color: "white",
  },
  shopLink: {
    color: "black",
    textDecoration: "none",
    margin: "0 8px 8px 0",
    padding: "8px 78px",
    backgroundColor: "white",
    fontSize: 16,
  },
  trendingContainer: {
    height: 700,
    display: "flex",
    alignItems: "flex-end",
    backgroundPosition: "center center",
  },
}));
const Trending = (props) => {
  const classes = useStyles();
  return (
    <div>
      <div>{props.titleTrending}</div>
      <Grid container spacing={3}>
        {props.dataTrending.map((item, key) => {
          return (
            <Grid item xs={12} sm={6} key={key}>
              <div className={classes.contentLink}>
                <div
                  className={classes.trendingContainer}
                  style={{ background: `url(${item.img})` }}
                >
                  <div className={classes.info}>
                    <div className={classes.trendingName}>{item.title}</div>
                    <div className={classes.shopLink}>{item.button}</div>
                  </div>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Trending;
