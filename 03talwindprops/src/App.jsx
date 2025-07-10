import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card.jsx";
function App() {
  const [count, setCount] = useState(0);
  let name = { firstName: "Abdul Rehman", secondName: "Abdul Raheem" };
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Talwind Test</h1>
      <Card Name={name.firstName} btnText="Click Me" />
      <Card Name={name.secondName} btnText="Visit Me" />
    </>
  );
}

export default App;
