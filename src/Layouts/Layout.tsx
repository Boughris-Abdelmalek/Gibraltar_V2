import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import { Container, Content } from "./styles";
import { MenuProvider } from "../contexts/MenuContext";

const Layout: React.FC = () => {
  return (
    <Container>
      <MenuProvider>
        <Header />
      </MenuProvider>
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};

export default Layout;
