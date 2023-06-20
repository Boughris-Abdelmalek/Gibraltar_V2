import { styled } from "styled-components";

export const ProductDetailsSection = styled.section`
  min-height: calc(100vh - 5rem);
  width: 100%;
`;

export const ProductDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 100%;
  width: 100%;
  padding: 4rem;
`;

export const ProductInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  padding: 0rem 3rem;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;
  height: 100%;
`;

export const ProductInfoSpan = styled.span``;

export const ProductImage = styled.img`
  width: 100%;
  min-width: 25rem;
  height: 40rem;
  object-fit: contain;
  background-color: white;
`;

export const ProductActions = styled.span`
  align-self: center;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5rem;
  width: 100%;
  height: 100%;
  padding: 0 1rem;

  svg {
    font-size: 3rem;
    cursor: pointer;
  }
`;

export const Rate = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: #e67a00;
  padding-bottom: 2rem;
  border-bottom: 1px solid black;

  svg {
    font-size: 2rem;
  }

  h5 {
    flex: 1;
    padding: 0 0.5rem;
  }

  .rating-count {
    padding: 0 1rem;
  }
`;

export const Count = styled.p`
  color: #007185;
`;

export const Button = styled.button`
  all: unset;
  background-color: #2773ff;
  color: white;
  font-size: 1.5rem;
  border-radius: 5px;
  height: 3rem;
  width: 8rem;
  text-align: center;
  cursor: pointer;
`;

export const ProductRelatedSection = styled.section`
  height: 100%;

  .category-title {
    padding-bottom: 4rem;
    padding-left: 3rem; 
  }
`;
