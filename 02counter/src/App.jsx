import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let Counter = 15;
  let [count, setCount] = useState(0);

  const addValue = () => {
    console.log("Button clicked");
    // Increment the counter
    if (count >= 20) {
      console.log("Counter cannot be greater than 20");
      alert("Counter cannot be greater than 20");
      return;
    }
    count += 1;
    setCount(count);
  };

  const removeValue = () => {
    console.log("Button clicked");
    // Increment the counter
    if (count <= 0) {
      console.log("Counter cannot be less than 0");
      alert("Counter cannot be less than 0");
      return;
    }
    // Decrement the counter
    // count = count - 1;
    // or
    // count -= 1;
    // or
    count = count - 1;
    setCount(count);
  };

  return (
    <>
      <h2>Counter & Remover</h2>
      <button onClick={addValue}>Click me {count}</button>
      <br />
      <br />
      <button onClick={removeValue}>Click me to Remove {count}</button>
    </>
  );
}

export default App;
