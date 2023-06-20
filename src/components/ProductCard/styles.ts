import { styled } from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
  height: 40rem;
  width: 25rem;
  outline: 1px solid #dddddd;
  border-radius: 2.5px;
  background-color: white;
  padding: 1rem;
  cursor: pointer;

  /* .product-title {
    min-height: 10rem;
  } */
`;

export const ImageContainer = styled.div`
  height: 20rem;
  width: 100%;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  object-position: center;
  padding: 2rem;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 2rem;
  height: 100%;
  width: 100%;
`;

export const Price = styled.h5`
  text-align: right;
  width: 100%;
  font-size: 1.5rem;
`;

export const Rating = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const Rate = styled.p`
  color: #e67a00;
`;

export const Count = styled.p`
  color: #007185;
`;

export const ProductActions = styled.span`
  display: flex;
  justify-content: space-between;
  width: 100%;

  svg {
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const BuyButton = styled.button`
  all: unset;
  background-color: #2773ff;
  color: white;
  font-size: 1rem;
  border-radius: 5px;
  height: 2rem;
  width: 5rem;
  text-align: center;
  cursor: pointer;
`;
