import React,{useState} from "react";
import { NavLink,Redirect } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Login = () => {
    const [token,setToken] = useState('')
    const [loggedIn,setLoggedIn] = useState(false)
    const [error,setError] = useState('')
    const _handleSubmit = (e) =>{
        e.preventDefault();
      const data =  {email:e.target.email.value,password:e.target.password.value}
      fetch("http://localhost:3001/user/login", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Message:", data.message)
          if(data.loggedIn){
              console.log(data.message,)
              setToken(data.accessToken)
              setLoggedIn(true)
              
          }else{
              console.log('It didnt work')
              setError(data.message)
          }
        })
    }

    if(loggedIn){
        return <Redirect to={{
            pathname:'/profile',
            state:{token:token}
        }} />
        
    }
  return (
    <div>
      <h1>Login</h1>
      <div className="form">
        <Container>
          <Card bg="info">
            <Form onSubmit={_handleSubmit} >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="label">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
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
      <NavLink to="/">Return Home</NavLink>
    </div>
  );
};

export default Login;
