import React from "react";

const Card = (props) => {
  console.log("Card!");
  return (
    <div key={props.id} onClick={() => props.onCardClick(props.id)}>
      <div>{props.index + 1}</div>
      <div>{props.value}</div>
      <div>{props.cost}</div>
    </div>
  );
};

// <div key={item.key}>
//   <StyledCard onClick={handleOnCardClick}>
//     <StyleEntry>{index + 1}</StyleEntry>
//     <StyleEntry>{item.value}</StyleEntry>
//     <StyleEntry>{item.cost}</StyleEntry>
//     <StyleEntry>{item.key}</StyleEntry>
//   </StyledCard>
// </div>;

export default Card;
