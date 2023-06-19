import React from "react";
import useDelayUnmount from "../../hooks/useDelayUnmount/useDelayUnmount";
import SearchBar from "../SearchBar/SearchBar";
import {
  Container,
  NavItems,
  Navigation,
  NavItem,
  Logo,
  LogoImage,
  BurgerMenu,
  BurgerMenuItems,
} from "./styles";
import { BurgerIcon, CartIcon, UserIcon } from "../Icon/Icon";
import logo from "../../assets/logo.svg";
import useMenu from "../../hooks/useMenu/useMenu";

const Header: React.FC = () => {
  const { isMenuOpen, toggleMenu, closeMenu } = useMenu();
  const showDiv = useDelayUnmount(isMenuOpen, 250);

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    closeMenu();
  };

  return (
    <Container>
      <Navigation>
        <Logo to="/">
          <LogoImage src={logo} />
        </Logo>
        <NavItems>
          <NavItem to="/products">products</NavItem>
          <NavItem to="/about">about</NavItem>
          <NavItem to="/contact">contact</NavItem>
        </NavItems>
        <SearchBar onSearch={handleSearch} />
        <NavItems>
          <NavItem to="/profile">
            <UserIcon />
          </NavItem>
          <NavItem to="/cart">
            <CartIcon />
          </NavItem>
        </NavItems>
        <BurgerMenu onClick={toggleMenu}>
          <BurgerIcon />
        </BurgerMenu>
      </Navigation>
      {showDiv && (
        <BurgerMenuItems className={isMenuOpen ? "slide-in" : "slide-out"}>
          <NavItem to="/products" onClick={closeMenu}>
            products
          </NavItem>
          <NavItem to="/about" onClick={closeMenu}>
            about
          </NavItem>
          <NavItem to="/contact" onClick={closeMenu}>
            contact
          </NavItem>
          <NavItem to="/profile" onClick={closeMenu}>
            profile
          </NavItem>
          <NavItem to="/cart" onClick={closeMenu}>
            cart
          </NavItem>
        </BurgerMenuItems>
      )}
    </Container>
  );
};

export default Header;
