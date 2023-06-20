import { styled } from "styled-components";

export const ProductDetailsSection = styled.section`
  min-height: calc(100vh - 10rem);
  width: 100%;
`;

export const ProductDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 100%;
  width: 100%;
  padding: 5rem;
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
  width: 65%;
  height: 100%;
  object-fit: contain;
  background-color: white;
`;

export const ProductActions = styled.span`
  align-self: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 1rem;

  svg {
    font-size: 4rem;
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

  h4 {
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
  font-size: 2rem;
  border-radius: 5px;
  height: 4rem;
  width: 10rem;
  text-align: center;
  cursor: pointer;
`;

export const ProductRelatedSection = styled.section`
  min-height: 100vh;
`;
