import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { makeStyles } from "@mui/styles"
import { Card, CardActionArea, CardMedia, Container, Grid } from "@mui/material"
// import { useDispatch } from 'react-redux';
const useStyles = makeStyles((theme) => ({
  image: {
    maxHeight: "100%",
    maxWidth: "100%"
  }
}))
const Carousel = (props) => {
  const classes = useStyles()
  // const Dispatch=useDispatch()   
  // console.log(props.carouselImg);
  var settings = {
    dots: true,
    Infinity: true,
    slidesToShow: 1,
    slidesToScoll: 1,
    autoplaySpeed: 3000,
    autoPlay: true
  }
  return (
    <div>
      <Container maxWidth="xl" />
      <Grid item xs={12}>
        <Slider {...settings}>
          {props.carouselImg.map((item, key) => {
            return (
              <div key={key}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={item}
                      title="Contemplative Reptile"
                    />
                  </CardActionArea>
                </Card>
              </div>
            )
          })}
        </Slider>
      </Grid>
    </div>
  )
}
export default Carousel