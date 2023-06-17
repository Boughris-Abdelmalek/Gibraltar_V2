import React from "react";
import { Container, NavItems, Navigation, NavItem } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Navigation>
        <NavItems>
          <NavItem to="/">logo</NavItem>
          <NavItem to="/products">products</NavItem>
          <NavItem to="/about">about</NavItem>
          <NavItem to="/contact">contact</NavItem>
        </NavItems>
      </Navigation>
    </Container>
  );
};

export default Header;
