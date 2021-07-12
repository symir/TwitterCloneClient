import React from "react";
import Card from "react-bootstrap/Card";

<Card style={{ width: "18rem" }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>;

/*
const Card = (props) => {
  console.log("Card!");
  return (
    <div key={props.id} onClick={() => props.onCardClick(props.id)}>
      <div>{props.index + 1}</div>
      <div>{props.value}</div>
      <div>{props.cost}</div>
    </div>
  );
};*/

// <div key={item.key}>
//   <StyledCard onClick={handleOnCardClick}>
//     <StyleEntry>{index + 1}</StyleEntry>
//     <StyleEntry>{item.value}</StyleEntry>
//     <StyleEntry>{item.cost}</StyleEntry>
//     <StyleEntry>{item.key}</StyleEntry>
//   </StyledCard>
// </div>;

export default Card;
