import React from "react";
import { useNavigate } from "react-router-dom";

import { IProps } from "./IProps";

import {
  Card,
  Image,
  Title,
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
      <Image src={image} alt={title} width="100rem" />
      <ProductDetails>
        <Title>{truncatedTitle}</Title>
        <Price>{price}$</Price>
        <Rating>
          <Rate>{starRating}</Rate>
          <Count>({rating?.count})</Count>
        </Rating>
      </ProductDetails>
      <ProductActions>
        <AddToCartIcon />
        <BuyButton>buy</BuyButton>
      </ProductActions>
    </Card>
  );
};

export default ProductCard;
