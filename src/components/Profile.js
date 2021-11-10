import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Login from "./Login";
import * as BI from "react-icons/bi/";
import { NavLink } from "react-router-dom";
import '../styles/Profile.css'

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
      <div style={{backgroundColor:'#dddfd4',height:'100vh',color:'#3FB0AC'}}>
        <h1>{this.state.user.username}</h1>

        <Container>
          <Card>
            <Card.Header style={{backgroundColor:'#fae596'}}>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <a
                  href={this.state.user.github}
                  target="_blank"
                  rel="noreferrer"
                  className='profileLink'
                >
                  Github
                </a>
                <a
                  href={this.state.user.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className='profileLink'
                >
                  LinkedIn
                </a>
                <a
                  href={this.state.user.portfolio}
                  target="_blank"
                  rel="noreferrer"
                  className='profileLink'
                >
                  Portfolio
                </a>
                <NavLink className='profileLink' to="feed">My Feed</NavLink>
              </div>
            </Card.Header>

            <Card.Body style={{backgroundColor:'#dddfd4',color:'#3FB0AC'}}>
              {/* <img src={localStorage.getItem('profilePic')} alt="profile_picture" /> */}

              <div  style={{ display: "inline" }}>
                <h6>
                  <u>My Languages:</u>
                </h6>
                <p>
                  <i>{this.state.languages[0]}</i>
                </p>
                <p>{this.state.languages[1]}</p>
                <p>{this.state.languages[2]}</p>
              </div>
            </Card.Body>
          </Card>
          <Card id='card-banner'>
            <Form onSubmit={this._handleBanner}>
              <Form.Control
                as="textarea"
                placeholder="What's on your mind? What do you want to chat about today?"
                name="banner"
                defaultValue={this.state.bannerMessage}
                style={{ height: "100px" }}
              />
              <Button style={{backgroundColor:'#3FB0AC'}} type="submit">
                <BI.BiCommentCheck />
              </Button>
            </Form>
          </Card>

          <Button id='logout' style={{backgroundColor:'#fae596',margin:'2px'}} onClick={this._handleLogout}>Logout</Button>
        </Container>
      </div>
    );
  }
}

export default Myprofile;
