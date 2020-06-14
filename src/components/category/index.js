import React from 'react';
import CategoryContainer from "./styles";
import Header from "../header";

function Category({ children, name, onDrop }) {
  const onDragOver = (ev) => {
    ev.preventDefault();
  }

  return <CategoryContainer
    id={name}
    onDragOver={onDragOver}
    onDrop={(e) => onDrop(e, name)}>
    <Header text={name} />
    {children}
  </CategoryContainer>;
}

export default Category;