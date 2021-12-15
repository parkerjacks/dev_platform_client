import React,{useState} from "react";
import { NavLink,Redirect } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../styles/Signup.css";

const Signup = () => {
    const [signedUp,setSignedUp] = useState(false)
    const [message,setMessage] = useState('')
  const _handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    fetch("http://localhost:3001/user/signup", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"*"
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data.message)
        if(data.created){
            setSignedUp(true);
            localStorage.setItem('username',e.target.username.value)
            
        }else{
            setMessage(data.message)
        }
      })

  };
  if(signedUp){
    return(
        <Redirect to='/create'/>
    )
  }
  return (
    <div className="mainSignup">
      <Container>
        <Row className="justify-content-center">
          <Col xs={10} lg={7} xl={6}>
            <div className="signUpHeading">Signup</div>
              <Card className="signupCard">
                <Form onSubmit={_handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicUsername">
                    {/* <Form.Label className="label">Username</Form.Label> */}
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      name="username"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    {/* <Form.Label className="label">Email address</Form.Label> */}
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      name="email"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    {/* <Form.Label className="label">Password</Form.Label> */}
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                    />
                  </Form.Group>

                  <Button className="signupButton" type="submit">
                    Sign Up
                  </Button>
                </Form>
              </Card>

              <NavLink className="rtnHomeLink" to="/">Return Home</NavLink>

              <p className="errorMsg">{message}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signup;
