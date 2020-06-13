import React from 'react';
import { MainContainer, Close, Text } from "./styles";
 
function Reward({name, canBeRemoved }) { 
  return <MainContainer>
      <Text>{name}</Text>
      {canBeRemoved && <Close>x</Close>}
  </MainContainer>;
}
 
export default Reward;