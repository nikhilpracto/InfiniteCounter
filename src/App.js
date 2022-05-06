import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null);
  const [buttonType, setButtonType] = useState("Stop");

  const startCounter = () => {
    setButtonType("Stop");
    return setTimeout(increaseCounter, 1000);
  };

  const stopCounter = () => {
    setButtonType("Start");
    clearTimeout(timeoutId);
  };

  const buttonHandler = () => {
    switch (buttonType) {
      case "Start":
        startCounter();
        break;
      case "Stop":
        stopCounter();
        break;
      default:
    }
  };

  const increaseCounter = () => {
    setCount((count) => count + 1);
  };

  useEffect(() => {
    clearTimeout(timeoutId);
    setTimeoutId(startCounter());
  }, [count]);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => buttonHandler()}>{buttonType}</button>
    </div>
  );
}
