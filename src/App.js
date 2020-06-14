import React from 'react';
import { MainArea, Rewards, Categories, CategoriesContainer } from "./App.styles";
import Header from "./components/header";
import Category from "./components/category";
import Reward from "./components/reward-list/reward";
import categories from "./data/categories";
import rewards from "./data/rewards";

function App() {
  const onDrop = (ev) => {
    let id = ev.dataTransfer.getData("id");
    ev.target.appendChild(document.getElementById(id));
  }

  const onDragStart = (ev, name) => {
      ev.dataTransfer.setData("id", name);
  }

  return (
    <MainArea>
      <Rewards>
        <Header text="Rewards" />
        {
          rewards.map(({ name }) => <Reward name={name} onDragStart={onDragStart} />)
        }
      </Rewards>
      <Categories>
        <Header text="Categories" />
        <CategoriesContainer>
          {
            categories.map(({ name }) => <Category name={name} onDrop={onDrop} />)
          }
        </CategoriesContainer>
      </Categories>
    </MainArea>
  );
}

export default App;
