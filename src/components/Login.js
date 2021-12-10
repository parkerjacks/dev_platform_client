//import React,{useState} from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";


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
    <div style={{backgroundColor:'#dddfd4',height:'100vh',color:'#3FB0AC'}}>
      <h1>Login</h1>
      <div className="form">
        <Container>
          <Card style={{backgroundColor:'#3FB0AC'}}>
            <Form onSubmit={_handleSubmit} >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="label">Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  name="username"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="label">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                />
              </Form.Group>
              <Button variant="light" type="submit">
                Login
              </Button>
            </Form>
          </Card>
        </Container>
        <p>{error}</p>
      </div>
      <NavLink style={{color:'#3FB0AC'}}to="/">Return Home</NavLink>
    </div>
  );
};

export default Login;
