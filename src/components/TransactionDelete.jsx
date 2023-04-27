import React from "react";

export default function TransactionDelete(props) {
  const handleClick = () => {
    props.onDelete();
  };

  return (
    <button onClick={handleClick}>Delete</button>
  );
}
