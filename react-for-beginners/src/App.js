import { useState, useEffect } from "react";
import Button from "./Button";
import TodoList from "./TodoList";

function App() {
  
  return (
    <div>
      <Button text="test button"/>
      <TodoList />
    </div>
  );
}

export default App;
