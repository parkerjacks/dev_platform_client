import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Login from "./Login";

const Myprofile = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:3001/user/${localStorage.getItem("username")}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.user);
          setUser(data.user);
        });
    }, 2000);
  }, []);

  const _handleLogout = () => {
    localStorage.removeItem("username");
    window.location.reload();
  };

  if (!localStorage.getItem("username")) return <Login />;
  return (
    <div>
      <h1>Profile</h1>

      <Container>
        <Card>
          <h2>{user.username}</h2>
          <img src={user.pic} alt="profile_picture" />
          <div style={{display:'inline'}}>
          <ul>
            {user.currentLanguages.map((language) => {
              return <li>{language}</li>;
            })}
          </ul>
          </div>
        </Card>
        <Card>
          <Form.Control
            as="textarea"
            placeholder="What's on your mind? What do you want to chat about today?"
            style={{ height: "100px" }}
          />
        </Card>
        <Card style={{ margin: "5px" }}>
          <a href={user.github} target="_blank" rel="noreferrer">
            Github
          </a>
          <a href={user.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={user.portfolio} target="_blank" rel="noreferrer">
            Portfolio
          </a>
        </Card>
        <Button onClick={_handleLogout}>Logout</Button>
      </Container>
    </div>
  );
};

export default Myprofile;
