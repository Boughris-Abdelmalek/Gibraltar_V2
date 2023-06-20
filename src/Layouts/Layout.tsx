import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import { Container, Content } from "./styles";
import { MenuProvider } from "../contexts/MenuContext";
import Footer from "../components/Footer/Footer";

const Layout: React.FC = () => {
  return (
    <Container>
      <MenuProvider>
        <Header />
      </MenuProvider>
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </Container>
  );
};

export default Layout;
