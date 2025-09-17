import React, { useState } from "react";

const Counter: React.FC = () => {
  // state สำหรับเก็บค่า count
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Counter Exercise</h2>
      <h1>{count}</h1>

      <div style={{ margin: "20px 0" }}>
        <button onClick={() => setCount(count + 1)}>+ เพิ่ม</button>
        <button onClick={() => setCount(count - 1)}>- ลด</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
