import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);

  const AddValue = () => {
    console.log("Value Increased:", counter);
    counter = counter + 1;
    if (counter <= 20) setCounter(counter);
  };

  const RemoveValue = () => {
    console.log("Value Decreased:", counter);
    counter = counter - 1;
    if (counter >= 0) setCounter(counter);
  };

  return (
    <>
      <h1>Chai aur React with Vite.</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={AddValue} className="add">
        Add value
      </button>
      <br />
      <button onClick={RemoveValue}>Decrease Value</button>
    </>
  );
}

export default App;
