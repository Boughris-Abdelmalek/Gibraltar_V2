import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import { Container, Content } from "./styles";

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};

export default Layout;
