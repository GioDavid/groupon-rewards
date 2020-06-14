import React from 'react';
import { MainContainer, Close, Text } from "./styles";
 
function Reward({name, canBeRemoved, onDragStart }) { 
  return <MainContainer id={name} draggable onDragStart={onDragStart}>
      <Text>{name}</Text>
      {canBeRemoved && <Close>x</Close>}
  </MainContainer>;
}
 
export default Reward;