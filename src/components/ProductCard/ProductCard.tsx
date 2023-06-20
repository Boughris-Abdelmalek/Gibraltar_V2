import React from "react";
import { useNavigate } from "react-router-dom";

import { IProps } from "./IProps";

import {
  Card,
  ImageContainer,
  Image,
  Price,
  Rating,
  Rate,
  Count,
  ProductActions,
  BuyButton,
  ProductDetails,
} from "./styles";
import { AddToCartIcon } from "../Icon/Icon";

import { truncateTitle, generateStarRating } from "../../utils";
import TextField from "../TextField/TextField";

const ProductCard: React.FC<IProps> = ({ item }) => {
  const { title, image, price, rating, id } = item || {};

  const truncatedTitle = truncateTitle(title);
  const starRating = generateStarRating(rating?.rate);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${id}`);
  };

  return (
    <Card onClick={handleClick}>
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>
      <ProductDetails>
        <TextField variant="h4" className="product-title">
          {truncatedTitle}
        </TextField>
        <Rating>
          <Rate>{starRating}</Rate>
          <Count>({rating?.count})</Count>
        </Rating>
        <Price>{price}$</Price>
        <ProductActions>
          <AddToCartIcon />
          <BuyButton>buy</BuyButton>
        </ProductActions>
      </ProductDetails>
    </Card>
  );
};

export default ProductCard;
