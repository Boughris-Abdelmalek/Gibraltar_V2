import { styled } from "styled-components";

export const ProductSection = styled.section`
  background-color: #f6f6f6;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  column-gap: 2rem;
  row-gap: 2rem;
  width: 100%;
  padding: 2rem;
`;
