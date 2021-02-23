import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { users } from "../data";

export default function Item() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedIn, setisSignedIn] = useState(false);
  const [user, setUser] = useState(null);

  function check() {
    for (let i = 0; i < users.length; i++) {
      if (users[i]["email"] === email && users[i]["password"] === password) {
        setisSignedIn(true);
        setUser(users[i]);
      }
    }
    if (user != null) {
      alert("You entered an incorrect username or password");
    }
  }

  function logOut() {
    setUser(null);
    setisSignedIn(false);
  }

  if (isSignedIn) {
    return (
      <Card style={{ width: "16rem" }}>
        <Card.Img variant="top" src={user.photo} />
        <Card.Body>
          <Card.Title>{user.email}</Card.Title>
          <Button variant="danger" type="button" onClick={logOut}>
            Log Out
          </Button>
        </Card.Body>
      </Card>
    );
  }
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="button" onClick={check}>
        Sign In
      </Button>
    </Form>
  );
}
