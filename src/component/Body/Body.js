import React from "react";
import Carousel from "./BodyComponent/Carousel";
import Trending from "./BodyComponent/Trending";
import { makeStyles } from "@mui/styles";
import MoreNike from "./BodyComponent/MoreNike";
import Menu from "./BodyComponent/Menu";
import ProductScroll from "./BodyComponent/ProductScroll";

const useStyles = makeStyles((theme) => ({
  Body: {
    padding: " 44px 50px",
  },
  bodyComponent: {
    marginTop: 84,
  },
}));
const Body = (props) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.bodyComponent}>
        <Carousel carouselImg={props.carouselImg} />
      </div>
      <div className={classes.bodyComponent}>
        <Trending
          titleTrending={props.titleTrending}
          dataTrending={props.dataTrending}
        />
      </div>
      <div className={classes.bodyComponent}>
        <MoreNike dataMoreNike={props.dataMoreNike} />
      </div>

      <div className={classes.bodyComponent}>{<ProductScroll />}</div>
    </div>
  );
};
export default Body;
