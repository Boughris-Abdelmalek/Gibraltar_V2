import { styled } from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
  height: 30rem;
  width: 100%;
  outline: 1px solid #dddddd;
  border-radius: 2.5px;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  object-position: center;
  background-color: white;
  padding: 2rem;


  cursor: pointer;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;
  height: 20rem;
  width: 100%;
  padding: 0 0.5rem;
`;

export const Title = styled.h3`
  font-size: 1rem;
`;

export const Price = styled.h5`
  text-align: right;
  font-size: 1.5rem;
`;

export const Rating = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Rate = styled.p`
  color: #E67A00;
`;

export const Count = styled.p`
  color: #007185;
`;

export const ProductActions = styled.span`
  align-self: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  padding: 1rem;

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
