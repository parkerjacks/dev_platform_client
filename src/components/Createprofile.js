import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {useState} from 'react'
import {Redirect} from 'react-router-dom'
import CurrentLanguages from "./currentLanguages";
import NewLanguages from "./newLanguages";

const Createprofile = () => {
    const [created,setCreated] = useState(false)
  const _handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const knownCheckBoxes = document.getElementsByClassName("form-check-input");
    let knownChecked = [];
    let toLearnChecked = [];
    for (let i = 0; i < knownCheckBoxes.length; i++) {
      if (
        knownCheckBoxes[i].checked &&
        knownCheckBoxes[i].parentElement.parentElement.parentElement.id ===
          "known"
      ) {
        // console.log({name:knownCheckBoxes[i].name,message:'This is a known language'})
        knownChecked.push(knownCheckBoxes[i].name);
      }
      if (
        knownCheckBoxes[i].checked &&
        knownCheckBoxes[i].parentElement.parentElement.parentElement.id ===
          "toLearn"
      ) {
        // console.log({name:knownCheckBoxes[i].name,message:'This is a language to learn'})
        toLearnChecked.push(knownCheckBoxes[i].name);
      }
    }
    const data = {
      github: e.target.github.value,
      linkedin: e.target.linkedin.value,
      portfolio: e.target.portfolio.value,
      knownLanguages: knownChecked,
      toLearn: toLearnChecked,
      
    };
    localStorage.setItem('profilePic',e.target.pic.value)
    console.log(data)
    fetch(`http://localhost:3001/user/${localStorage.getItem('username')}/profile/create`, {
        method: "PUT", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          if(data.update){
              console.log('updated')
              setCreated(true)
          }
         
        })
  };
  if(created){
      return(
          <Redirect to='/profile' />
      )
  }
  return (
    <div>
      <h1>Create Profile</h1>
      <p>
        Now that you have signed up. Let's create your profile and get you
        connected!
      </p>
      <Container>
        <Card bg="info">
            <p>Make sure to include https:// or http:// with links</p>
          <Form onSubmit={_handleSubmit} encType='multipart/form-data'>
            <Card bg="light" style={{ margin: "5px" }}>
              {/* github */}
              <p>Github:</p>
              <Form.Group className="mb-3" controlId="formBasicGithub">
                <Form.Control
                  type="text"
                  placeholder="Enter Github URL"
                  name="github"
                />
              </Form.Group>
              {/* linkedin */}
              <p>LinkedIn:</p>
              <Form.Group className="mb-3" controlId="formBasicLinkedIn">
                <Form.Control
                  type="text"
                  placeholder="Enter LinkedIn URL"
                  name="linkedin"
                />
              </Form.Group>
              {/* portfolio */}
              <p>Portfolio:</p>
              <Form.Group className="mb-3" controlId="formBasicPortfolio">
                <Form.Control
                  type="text"
                  placeholder="Enter Portfolio URL"
                  name="portfolio"
                />
              </Form.Group>
            </Card>

            {/* languages you know */}
            <CurrentLanguages/>
            {/* languages you want to learn */}
            <NewLanguages/>
            <Card style={{ margin: "5px" }} bg="light">
              <Form.Group>
                <Form.Label>Upload Profile Picture:</Form.Label>
                <Form.Control name='pic'type="file" />
              </Form.Group>
            </Card>
            <Button variant="light" type="submit">
              Create Profile
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default Createprofile;
