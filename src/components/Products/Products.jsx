import React from "react";
import { Grid } from "@mui/material";
import Product from "./Product/Product";

const products = [
  {
    id: 1,
    name: "shoes",
    price: 200,
    size: 30,
    data: "data 1 description",
    date: "11/11/2021",
    img: "https://via.placeholder.com/150/000000/FFFFFF/?text=shoes",
  },
  {
    id: 2,
    name: "dress",
    price: 300,
    size: 52,
    data: "data 2 description",
    date: "9/9/2021",
    img: "https://via.placeholder.com/150/000000/FFFFFF/?text=dress",
  },
  {
    id: 3,
    name: "teshirt",
    price: 500,
    size: 20,
    data: "data 3 description",
    date: "10/10/2021",
    img: "https://via.placeholder.com/150/000000/FFFFFF/?text=teshirt",
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
