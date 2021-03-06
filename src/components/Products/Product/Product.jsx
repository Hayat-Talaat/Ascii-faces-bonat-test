import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";

// import { AddShoppingCart } from "@material-ui/icons";

import useStyles from "./styles";

const Product = ({ product }) => {
  const classes = useStyles();

  //   const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.img}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${product.price}
          </Typography>
        </div>

        <Typography
          dangerouslySetInnerHTML={{ __html: product.data }}
          variant="body2"
          color="textSecondary"
          component="p"
        />
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h6" component="h5">
            {product.date}
          </Typography>
          <Typography gutterBottom variant="h6" component="h5">
            {product.size}
          </Typography>
        </div>
      </CardContent>
      {/* <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
          <AddShoppingCart />
        </IconButton>
      </CardActions> */}
    </Card>
  );
};

export default Product;
