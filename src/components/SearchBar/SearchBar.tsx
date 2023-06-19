import React, { useState } from "react";
import { IProps } from "./IProps";
import { SearchBarContainer, SearchInput, SearchIcon } from "./styles";

const SearchBar: React.FC<IProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchValue(query);
  };

  const handleClick = () => {
    onSearch(searchValue);
    setSearchValue("");
  };

  return (
    <SearchBarContainer>
      <SearchInput type="text" placeholder="Search" onChange={handleSearch} value={searchValue} />
      <SearchIcon onClick={handleClick} />
    </SearchBarContainer>
  );
};

export default SearchBar;
