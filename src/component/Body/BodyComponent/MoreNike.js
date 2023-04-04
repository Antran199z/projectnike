import React from "react";
import { makeStyles } from "@mui/styles";
import { ImageList } from "@mui/material";
import { ImageListItem } from "@mui/material";
const useStyles = makeStyles((theme) => ({
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  button: {
    width: "100px",
    height: "40px",
    // backgroundColor:"blue",
    borderRadius: "20px",
    margin: "0 auto",
  },
  textTranf: {
    textAlign: "center",
    "&:hover": {
      backgroundColor: "#808080",
      textTransform: "capitalize",
      cursor: "pointer",
      borderRadius: "20px",
    },
  },
}));

const MoreNike = (props) => {
  const classes = useStyles();
  // console.log(props.dataMoreNike);
  return (
    <div>
      <ImageList variant="masonry" cols={3} gap={8} className={classes.image}>
        {props.dataMoreNike.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.titleButton}
              loading="lazy"
            />
            <div className={classes.button}>
              <div className={classes.textTranf}>{item.titleButton}</div>
            </div>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default MoreNike;
