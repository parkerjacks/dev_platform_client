import { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

class Feed extends Component {
  constructor() {
    super();
    this.state = {
      matchedUsers: [],
    };
  }

  componentDidMount = () => {
    fetch(
      `http://localhost:3001/user/${localStorage.getItem(
        "username"
      )}/users/feed`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.matchedUsers);
        this.setState({ matchedUsers: data.matchedUsers });
      });
  };

  _handleInitiateChat = () => {};
  render() {
    return (
      <Container>
        <h1>Feed</h1>

        {this.state.matchedUsers.map((user) => {
          const [firstElement, secondElement, thirdElement] =
            user.currentLanguages;
          const [firstIndex, secondIndex, thirdIndex] = user.newLanguages;
          return (
            <Card key={user.id} style={{ margin: "15px" }}>
              <Card.Header>
                {" "}
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Card.Text className="text-end">
                    <a href={user.github} target="_blank" rel="noreferrer">
                      <Card.Subtitle className="text-end">Github</Card.Subtitle>
                    </a>
                  </Card.Text>
                  <Card.Text className="text-end">
                    <a href={user.linkedin} target="_blank" rel="noreferrer">
                      <Card.Subtitle className="text-end">
                        LinkedIn
                      </Card.Subtitle>
                    </a>
                  </Card.Text>
                  <Card.Text className="text-end">
                    <a href={user.portfolio} target="_blank" rel="noreferrer">
                      <Card.Subtitle className="text-end">
                        Portfolio
                      </Card.Subtitle>
                    </a>
                  </Card.Text>
                </div>
              </Card.Header>
              <Card.Title as="h4" className='text-center'>{user.username} </Card.Title>
              <Card.Body style={{ backgroundColor: "pink" }}>
                <Card.Subtitle>My Languages:</Card.Subtitle>
                <Card.Text>
                  {firstElement}, {secondElement}, {thirdElement}
                </Card.Text>
                <Card.Subtitle>Languages I want to Learn:</Card.Subtitle>
                <Card.Text>
                  {firstIndex}, {secondIndex}, {thirdIndex}
                </Card.Text>

                <Card.Footer style={{ backgroundColor: "cyan" }}>
                  <p>
                    <i>{user.banner}</i>
                  </p>
                </Card.Footer>
              </Card.Body>
              <Button onClick={this._handleInitiateChat}>Start Chat</Button>
            </Card>
          );
        })}
        <NavLink to="/profile">My Profile</NavLink>
      </Container>
    );
  }
}

export default Feed;
