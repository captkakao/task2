import React from "react";
import { Card, Button } from "react-bootstrap";

export default function NewsItem(props) {
  return (
    <Card className="bg-dark text-white mb-3">
      <Card.Img src={props.photo} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.content}</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}
