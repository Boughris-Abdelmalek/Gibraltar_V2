import { styled } from "styled-components";
import { MagnifierIcon } from "../Icon/Icon";

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2%.5;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  z-index: 3;
  background-color: white;
  
  @media (max-width: 1150px) {
    height: 3rem;
  }
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  border: none;
  outline: none;
  padding: 0 8px;
  font-size: 1.25rem;

  @media (max-width: 1150px) {
    font-size: 1rem;
  }
`;

export const  SearchIcon = styled(MagnifierIcon)`
  font-size: 2rem;
  color: #555555;
  cursor: pointer;
`