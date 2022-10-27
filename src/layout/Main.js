import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import LeftNavBar from "../Shared/LeftNavBar/LeftNavBar";
import RightNavBar from "../Shared/RightNavBar/RightNavBar";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container className='py-3'>
        <Row>
          <Col lg='2' className='d-none d-lg-block'>
            <LeftNavBar></LeftNavBar>
          </Col>
          <Col lg='7'>
            <Outlet></Outlet>
          </Col>
          <Col lg='3'>
            <RightNavBar></RightNavBar>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
