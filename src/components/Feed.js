import { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button'

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

  _handleInitiateChat = () =>{

  }

  render() {
    return (
      <Container>
        <h1>Feed</h1>
        {this.state.matchedUsers.map((user) => {
            const [firstElement,secondElement,thirdElement] = user.currentLanguages
            const [firstIndex,secondIndex,thirdIndex] = user.newLanguages
          return (
            <Card key={user.id}>
              <Card.Title>{user.username}</Card.Title>
              <Card.Body>
                <Card.Subtitle>My Languages:</Card.Subtitle>
                <Card.Text>{firstElement},{secondElement},{thirdElement}</Card.Text>
                <Card.Subtitle>Languages I want to Learn:</Card.Subtitle>
                <Card.Text>{firstIndex},{secondIndex},{thirdIndex}</Card.Text>
                <Card.Subtitle>{user.banner}</Card.Subtitle>
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
