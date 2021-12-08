import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "../styles/Navbar.css";
import codeGuy from "../images/codeGuy.svg";


const Navbar1 = () => {
  return (
    <div className='main'>
      
      <Navbar expand="md" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home">
          
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className="navLinks me-2" href="/">Home</Nav.Link>
              <Nav.Link className="navLinks me-2" href="#">Our Story</Nav.Link>
              <Nav.Link className="navLinks" href="#">Contact Us</Nav.Link>
              {/* <Nav.Link className="navLinks" href="/signup">Sign Up</Nav.Link> */}
              {/* <Nav.Link className="navLinks" href="/login">Login</Nav.Link> */}
              {/* <Nav.Link href="#pricing">Dev_Platform(<i>Premium</i>)</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="txtIconContainer">
        <Row className="align-items-center">
          <Col className="leftSide" md={5}>
            <div className="mainHeading"><span id="DEVTitle">Dev</span><span id="PlatformTitle">Platform</span></div>
            <p className="descriptionText">
              Want to learn a new programming language through interaction with a
              fellow developer? Pair with someone who has first hand experience to help you avoid
              all the beginner mistakes. Sign up today and connect on Dev Platform!
            </p>
            <div className="">
              <Button className="signUpBtn" href="/signup">SIGN UP</Button>
              <Button className="loginBtn ms-4" href="/login">LOGIN</Button>
            </div>

          </Col>

          <Col className="rightSide" xs={{ order: 'first' }} md={{ order: 'last' }}><img id="homeImg" src={codeGuy} alt="Dark grey and white graphic of a guy coding" /></Col>
        </Row>
      </Container>

   {/*    <div className="d-flex align-items-center">
        <div>
          <h1>Welcome to Dev Platform</h1>
          <p>Test Test Test</p>
        </div>

        <div>
          IMG GOES HERE
        </div> 
      </div> */}
     
    </div>
  );
};

export default Navbar1;
