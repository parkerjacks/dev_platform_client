import { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
          const [firstElement, secondElement, thirdElement] = user.currentLanguages;
          const [firstIndex, secondIndex, thirdIndex] = user.newLanguages;
          return (
            <Card key={user.id}>
              <Card.Header as="h4">{user.username} </Card.Header>
              <Card.Body>
                  <div style={{display:'flex',justifyContent:'space-around'}}>
                <Card.Text className="text-end">
                  <a href={user.github}>
                    <Card.Subtitle className="text-end">Github</Card.Subtitle>
                  </a>
                </Card.Text>
                <Card.Text className="text-end">
                  <a href={user.linkedin}>
                    <Card.Subtitle className="text-end">LinkedIn</Card.Subtitle>
                  </a>
                </Card.Text>
                <Card.Text className="text-end">
                  <a href={user.portfolio}>
                    <Card.Subtitle className="text-end">
                      Portfolio
                    </Card.Subtitle>
                  </a>
                </Card.Text>
                </div>
                <Card.Subtitle>My Languages:</Card.Subtitle>
                <Card.Text>
                  {firstElement},{secondElement},{thirdElement}
                </Card.Text>
                <Card.Subtitle>Languages I want to Learn:</Card.Subtitle>
                <Card.Text>
                  {firstIndex},{secondIndex},{thirdIndex}
                </Card.Text>

                <Card.Footer>
                  <p>
                    <i>{user.banner}</i>
                  </p>
                </Card.Footer>
              </Card.Body>
              <Button>Start Chat</Button>
            </Card>
          );
        })}
      </Container>
    );
  }
}

export default Feed;
