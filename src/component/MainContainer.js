import React from "react";
import { CssBaseline } from "@mui/material";
import { Container } from "@mui/system";
import Body from "./Body/Body";
import NavSub from "./Navbar/NavSub";
const MainContainer = (props) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container />
      <NavSub/>
      <Body
        carouselImg={props.carouselImg}
        titleTrending={props.titleTrending}
        dataTrending={props.dataTrending}
        dataMoreNike={props.dataMoreNike}
        merchMenu={props.merchMenu}
      />
    </React.Fragment>
  );
};
export default MainContainer;
