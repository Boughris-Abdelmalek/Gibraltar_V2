import { styled } from "styled-components";

export const Container = styled.div`
  display: grid;
  place-content: center;
  min-height: calc(100vh - 5rem);
  width: 100%;

  .form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 30rem;
    padding: 2rem;
  }

  .title {
    margin-bottom: 2rem;
    margin-top: -6rem;
  }
`;
