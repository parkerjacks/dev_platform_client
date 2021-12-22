//import React,{useState} from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import "../styles/Login.css";


const Login = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [error,setError] = useState('');
    const history = useHistory();
    
    const _handleSubmit = (e) =>{
      e.preventDefault();
      const data =  {username:e.target.username.value, password:e.target.password.value}
      fetch("http://localhost:3001/user/login", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          //console.log("Message:", data.message)
          if(data.loggedIn){
            //console.log(data.message,)
            setLoggedIn(true);
            console.log(loggedIn); //Why rtn false ??  Also, this line prevents err msg: 'loggedIn' is assigned a value but never used
            localStorage.setItem('username',e.target.username.value);
            let theUserId = data.userId;
            history.push(`/feed/${theUserId}`);
          } else {
              console.log('It didnt work')
              setError(data.message)
          }
        })
      }
     
  return (
    <div className="mainLogin">
      <Container>
        <Row className="justify-content-center">
          <Col xs={10} lg={7} xl={6}>
            <div className="loginHeading">Login</div>
            <Card className="loginCard">
              <Form onSubmit={_handleSubmit} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  {/* <Form.Label className="formLabel">Username</Form.Label> */}
                  <Form.Control
                    className = "enterCredentials"
                    type="text"
                    placeholder="Username"
                    name="username"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  {/* <Form.Label className="formLabel">Password</Form.Label> */}
                  <Form.Control
                    className = "enterCredentials"
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
                </Form.Group>

                <Button className="loginButton" type="submit">
                  Login
                </Button>
              </Form>
            </Card>

            <NavLink className="rtnHomeLink" to="/">Return Home</NavLink>
              
            <p className="errorMsg">{error}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
