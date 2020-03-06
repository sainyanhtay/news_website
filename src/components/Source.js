import React from "react";
import Card from "react-bootstrap/Card";
import "../styles/News.css";

const Source = source => {
  return (
    <Card>
      <Card.Header as="h5">{source.name}</Card.Header>
      <Card.Body>
        <a href={source.url}>
          <Card.Title>{source.url}</Card.Title>
        </a>
        <Card.Text>{source.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Source;
