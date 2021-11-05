import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Login from "./Login";

const Myprofile = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:3001/user/${localStorage.getItem("username")}`)
        .then((res) => res.json())
        .then((data) => {
            if(data.user.length !== 0){
                console.log(data.user);
                setUser(data.user);
            }else{
                console.log('broken')
            }
          
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
          <p>{user.currentLanguages[0]}</p>
          <p>{user.currentLanguages[1]}</p>
          <p>{user.currentLanguages[2]}</p>
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
