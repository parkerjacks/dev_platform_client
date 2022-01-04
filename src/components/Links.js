import React from 'react';
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";



const Links = () => {

    return (
        <div>
            <Card bg="light" style={{ margin: "5px" }}>
              <p>Github:</p>
              <Form.Group className="mb-3" controlId="formBasicGithub">
                <Form.Control
                  type="text"
                  placeholder="Enter Github URL"
                  name="github"
                />
              </Form.Group>

              <p>LinkedIn:</p>
              <Form.Group className="mb-3" controlId="formBasicLinkedIn">
                <Form.Control
                  type="text"
                  placeholder="Enter LinkedIn URL"
                  name="linkedin"
                />
              </Form.Group>
              
              <p>Portfolio:</p>
              <Form.Group className="mb-3" controlId="formBasicPortfolio">
                <Form.Control
                  type="text"
                  placeholder="Enter Portfolio URL"
                  name="portfolio"
                />
              </Form.Group>
            </Card>
        </div>
    )
}

export default Links;