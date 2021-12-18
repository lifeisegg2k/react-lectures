import { useState, useEffect } from "react";
import Button from "./Button";
import TodoList from "./TodoList";
import CoinTracker from "./CoinTracker";
import Movies from "./Movies";

function App() {
  
  return (
    <div>
      <Button text="test button"/>
      <hr />
      <TodoList />
      <hr />
      <CoinTracker />
      <hr />
      <Movies />
    </div>
  );
}

export default App;
