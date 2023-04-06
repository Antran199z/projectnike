import React from "react";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ListItem, Skeleton } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 24,
    marginBottom: 32,
  },
  container: {
    padding: 0,
    whiteSpace: "nowrap",
    overflowX: "hidden",
    cursor: "pointer",
    "&:hover": {
      overflowX: "scroll",
    },
    "&::-webkit-scrollbar": {
      backgroundColor: "#f5f5f5",
      height: 8,
    },
    "&::-webkit-scrollbar-track": {
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
      borderRadius: 10,
      backgroundColor: "#f5f5f5",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: 10,
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
      backgroundColor: "#757575",
    },
  },
  Product: {
    width: 390,
    listStyle: " none",
    display: "inline-block",
    marginRight: 20,
    marginBottom: 40,
  },
  ProductImage: {
    "&:hover": {
      opacity: 0.7,
    },
    width: "100%",
    height: 300,
    transition: "opacity 1s",
  },
  ProductDetailContainer: {
    fontSize: 16,
    display: "flex",
    marginTop: 12,
    lineHeight: 1.5,
    whiteSpace: "normal",
  },
  ProductDetail: {
    flex: "0 0 300px",
  },
  Price: {
    flex: "1 1 auto",
  },
  ProductType: {
    color: "#757575",
  },
}));
const ProductScroll = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const data = useSelector((state) => state.reducerURL.data);
  // console.log(data);
  const isLoading = useSelector((state) => state.reducerURL.isLoading);
  const ListProduct = data.slice(0, 5).map((item, index) => {
    return (
      <li key={index} className={classes.Product}>
        <img
          className={classes.ProductImage}
          src={item.img}
          alt=""
          onClick={() => {
            navigate(`/productDetail/${item._id}`);
          }}
        />
        <div className={classes.container}>
          <div className={classes.ProductDetail}>
            <div className={classes.ProductType}>{item.message}</div>
            <div className={classes.Price}>{item.price.toLocaleString()}</div>
          </div>
        </div>
      </li>
    );
  });
  var ListScrollLazyLoad = [];
  for (let i = 0; i <= 9; i++) {
    ListScrollLazyLoad.push(
      <li key={i} className={classes.Product}>
        <Skeleton>
          <img
            className={classes.ProductImage}
            src="https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/b0cccd97-5dc7-4dba-b720-ab7863109ebf/exploration-series-basketball-t-shirt-8dkWTQ.jpg"
          />
        </Skeleton>
        <div className={classes.ProductDetailContainer}>
          <div className={classes.ProductDetail}>
            <Skeleton width="70%">
              <div className={classes.ProductType}>ProductName</div>
            </Skeleton>
            <Skeleton width="70%">
              <div className={classes.ProductType}>ProductType</div>
            </Skeleton>
            <Skeleton>
              <div className={classes.Price}>2.000.000d</div>
            </Skeleton>
          </div>
        </div>
      </li>
    );
  }
  return (
    <div>
      <div className={classes.title}>Clean Look</div>
      {isLoading ? (
        <ul className={classes.container}>{ListScrollLazyLoad}</ul>
      ) : (
        <ul className={classes.container}>{ListProduct}</ul>
      )}
    </div>
  );
};

export default ProductScroll;
