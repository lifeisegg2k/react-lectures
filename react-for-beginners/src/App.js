import { useState, useEffect } from "react";
import Button from "./Button";
import TodoList from "./TodoList";
import CoinTracker from "./CoinTracker";

function App() {
  
  return (
    <div>
      <Button text="test button"/>
      <hr />
      <TodoList />
      <hr />
      <CoinTracker />
    </div>
  );
}

export default App;
