import React from "react";
import { Container, CssBaseline } from "@mui/material";
import { useParams } from "react-router-dom";
import ProductDetail from "../../component/ProductDetail/ProductDetail";
import Detail from "../../component/Detail/Detail";
const DetailProductPage = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        {/* <ProductDetail id={id} /> */}
        <Detail />
      </Container>
    </React.Fragment>
  );
};

export default DetailProductPage;
