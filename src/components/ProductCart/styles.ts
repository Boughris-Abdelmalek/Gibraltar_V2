import { styled } from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  margin: 1rem 0;
  padding: 1rem;
  height: 8rem;
  width: 100%;
  background-color: white;
  border-radius: 5px;

  .remove-from-cart {
    font-size: 5rem;
    cursor: pointer;
  }
`;

export const Image = styled.img`
  height: 100%;
  max-width: 100%;
  object-fit: contain;
`;

export const ProductControles = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
  width: 100%;
  flex: 1;
`;

export const Controles = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const Button = styled.button`
  font-size: 3rem;
`;
