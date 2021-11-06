import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Login from "./Login";
import * as BI from "react-icons/bi/";

class Myprofile extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      bannerMessage: "",
      languages: [],
    };
  }
  componentDidMount = () => {
    fetch(`http://localhost:3001/user/${localStorage.getItem("username")}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.user.length !== 0) {
          this.setState({ user: data.user });
          this.setState({ languages: data.user.currentLanguages });
          console.log(this.state.user);
        } else {
          console.log("broken");
        }
      });
  };

  _handleLogout = () => {
    localStorage.removeItem("username");
    window.location.reload();
  };
  _handleBanner = (e) => {
    let username = localStorage.getItem("username");
    e.preventDefault();
    this.setState({ bannerMessage: e.target.banner.value });
    fetch("http://localhost:3001/user/" + username, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: e.target.banner.value }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data.message);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  render() {
    if (!localStorage.getItem("username")) return <Login />;
    return (
      <div>
        <h1>Profile</h1>

        <Container>
          <Card>
            <h2>{this.state.user.username}</h2>
            {/* <img src={localStorage.getItem('profilePic')} alt="profile_picture" /> */}
            <div style={{ display: "inline" }}>
              <li>{this.state.languages[0]}</li>
              <li>{this.state.languages[1]}</li>
              <li>{this.state.languages[2]}</li>
            </div>
          </Card>
          <Card>
            <Form onSubmit={this._handleBanner}>
              <Form.Control
                as="textarea"
                placeholder="What's on your mind? What do you want to chat about today?"
                name="banner"
                defaultValue={this.state.bannerMessage}
                style={{ height: "100px" }}
              />
              <Button type="submit">
                <BI.BiCommentCheck />
              </Button>
            </Form>
          </Card>
          <Card style={{ margin: "5px" }}>
            <a href={this.state.user.github} target="_blank" rel="noreferrer">
              Github
            </a>
            <a href={this.state.user.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a
              href={this.state.user.portfolio}
              target="_blank"
              rel="noreferrer"
            >
              Portfolio
            </a>
          </Card>
          <Button onClick={this._handleLogout}>Logout</Button>
        </Container>
      </div>
    );
  }
}

export default Myprofile;
