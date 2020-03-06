import React from "react";
import Card from "react-bootstrap/Card";
import "../styles/News.css";

var moment = require("moment");

const News = news => {
  return (
    <Card className="bg-dark text-white">
      <a href={news.url}>
        <Card.Img src={news.urlToImage} alt={news.author} />
        <Card.ImgOverlay>
          <Card.Title>{news.title}</Card.Title>
          <Card.Text>{news.description}</Card.Text>
          <Card.Text>{moment(news.publishedAt).fromNow()}</Card.Text>
        </Card.ImgOverlay>
      </a>
    </Card>
  );
};

export default News;
