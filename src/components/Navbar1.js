import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "../styles/Navbar.css";

const Navbar1 = () => {
  return (
    <div>
      <Navbar bg="info" variant="light">
        <Container fluid>
          <Navbar.Brand href="#home" className="justify-content-start">
            Dev Platform
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            <Nav.Link href="/login">Login </Nav.Link>
            <Nav.Link href="#pricing">Something</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='banner'>
        <Container>
        <p>
          Want to learn a new programming language through interaction with a
          fellow developer? Someone with first hand experience to help you avoid
          all the beginner mistakes. Sign up today and connect on Dev Platform!
        </p>
        </Container>
      </div>

    </div>
  );
};

export default Navbar1;
