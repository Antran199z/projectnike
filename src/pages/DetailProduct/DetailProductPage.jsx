import React from "react";
import { Container, CssBaseline } from "@mui/material";
import { useParams } from "react-router-dom";
import ProductDetail from "../../component/ProductDetail/ProductDetail";
const DetailProductPage = () => {
  const { id } = useParams();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <ProductDetail id={id} />
      </Container>
    </React.Fragment>
  );
};

export default DetailProductPage;
