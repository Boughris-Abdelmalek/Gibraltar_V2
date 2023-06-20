import { styled } from "styled-components";

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  place-items: center;
  row-gap: 2rem;
  column-gap: 2rem;
  width: 100%;
  height: 100%;
  padding: 0 2rem;
`;
