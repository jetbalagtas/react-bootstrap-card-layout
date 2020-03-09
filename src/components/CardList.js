import React from "react";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

import "./CardList.css";

const CardList = props => {
  let cards = props.productCards.map(productCard => {
    let img = "";
    if (productCard.showBridge)
      img = (
        <div>
          <Card.Img
            variant="top"
            className="imgBg"
            src="https://res.cloudinary.com/bguggie/image/upload/v1425514882/darktiles_bg_gike55.jpg"
          />
          <Card.Img
            variant="top"
            className="imgTrue"
            src="https://res.cloudinary.com/bguggie/image/upload/v1425514888/wide_ggbridge_bg_teneax.jpg"
          />
        </div>
      );
    else
      img = (
        <div>
          <Card.Img
            variant="top"
            className="imgBg"
            src="https://res.cloudinary.com/bguggie/image/upload/v1425514882/darktiles_bg_gike55.jpg"
          />
          <Card.Img
            variant="top"
            className="imgFg"
            src="https://res.cloudinary.com/bguggie/image/upload/v1425514736/place_holder_zuvywg.png"
          />
        </div>
      );
    return (
      <Card
        key={productCard.id}
        className="shadow"
        style={{ width: "12rem", margin: "10px", borderRadius: "10px" }}>
        {img}
        <Card.Body>
          <Card.Title>{productCard.Heading}</Card.Title>
          <Card.Text>{productCard.Subheading}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Text className="productPrice">{productCard.Price}</Card.Text>
        </Card.Footer>
      </Card>
    );
  });

  return <Container className="cardsContainer">{cards}</Container>;
};

export default CardList;
