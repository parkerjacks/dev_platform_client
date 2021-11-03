import React,{useState} from "react";
import { NavLink,Redirect } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
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
    fetch("http://localhost:3001/api/signup", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data.message)
        if(data.created){
            setSignedUp(true);
            
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
    <div>
      <h1>Signup</h1>
      <div className="form">
        <Container>
          <Card bg="info">
            <Form onSubmit={_handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label className="label">Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Create a username"
                  name="username"
                />
              </Form.Group>
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
                Sign Up
              </Button>
            </Form>
          </Card>
        </Container>
        <p className='error'>{message}</p>
      </div>
      <NavLink to="/">Return Home</NavLink>
    </div>
  );
};

export default Signup;
