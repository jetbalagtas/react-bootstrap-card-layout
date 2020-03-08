import React from "react";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

// import "bootstrap/dist/css/bootstrap.min.css";
import "./CardList.css";

const CardList = props => {

  return (
    <Container className="cardsContainer">
      {props.productCards.map(productCard => {
        return (
          <Card
            className="shadow"
            style={{ width: "12rem", margin: "10px", borderRadius: "10px" }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>{productCard.Heading}</Card.Title>
              <Card.Text>{productCard.Subheading}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Text className="productPrice">{productCard.Price}</Card.Text>
            </Card.Footer>
          </Card>
        );
      })}
    </Container>
  );
};

export default CardList;
