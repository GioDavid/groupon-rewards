import React from 'react';
import Reward from "./components/reward-list/reward";
import Header from "./components/header";
import { MainArea, Rewards, Categories } from "./App.styles";

function App() {
  return (
    <MainArea>
      <Rewards>
        <Header text="Rewards" />
      </Rewards>
      <Categories>
        <Header text="Categories" />
        <Reward name="R1" />
      </Categories>
    </MainArea>
  );
}

export default App;
