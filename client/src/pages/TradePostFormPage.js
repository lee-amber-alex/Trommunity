import React from "react";
import Header from "../components/Header/Header";
import TradePostForm from "../components/TradePostForm/TradePostForm";
import { Container } from "react-bootstrap";
import "./style.css";
import SideNavbar from "../components/Nav/SideNavbar";

const TradePostFormPage = () => {
  return (
    <div>
      <SideNavbar />
      <Header />
      <main className="main">
        <Container>
          <h3 className="trade-title"></h3>
          <TradePostForm />
        </Container>
      </main>
    </div>
  );
};

export default TradePostFormPage;
