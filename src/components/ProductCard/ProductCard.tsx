import React from "react";
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

import { MdStarBorder, MdStarHalf, MdStar } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IProps } from "./IProps";

const generateStarRating = (rate?: number) => {
  const stars = [];
  const fullStars = Math.floor(rate || 0);
  const hasHalfStar = (rate || 0) - fullStars > 0.5;

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(<MdStar key={i} className="star-filled-icon" />);
    } else if (hasHalfStar && i === fullStars + 1) {
      stars.push(<MdStarHalf key={i} className="star-half-icon" />);
    } else {
      stars.push(<MdStarBorder key={i} className="star-empty-icon" />);
    }
  }
  return stars;
};

const truncateTitle = (title?: string) => {
  if (title && title.length > 50) {
    return title.substring(0, 50) + "...";
  }
  return title;
};

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
