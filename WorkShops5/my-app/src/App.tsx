import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h2 className="title">Counter Exercise - Solution</h2>
      <h1 className="count">{count}</h1>
      <div className="buttons">
        <button className="btn add" onClick={() => setCount(count + 1)}>  + เพิ่ม
        </button>
        <button className="btn subtract" onClick={() => setCount(count - 1)}> - ลด
        </button>
        <button className="btn reset" onClick={() => setCount(0)}>  Reset
        </button>
      </div>
    </div>
  );
}

export default App;
