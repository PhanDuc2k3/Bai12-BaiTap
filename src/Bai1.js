import React, { useState } from "react";

function Bai1() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sum, setSum] = useState(0);
  const [multiply, setMultiply] = useState(0);

  const handleSum = () => {
    setSum(number1 + number2);
  };

  const handleMultiply = () => {
    setMultiply(number1 * number2);
  };

  return (
    <div>
      <h2>Enter two numbers:</h2>
      <label>
        Number 1:
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(Number(e.target.value))}
        />
      </label>
      <br />
      <label>
        Number 2:
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(Number(e.target.value))}
        />
      </label>
      <br />
      <div>
        <button onClick={handleSum}>Add</button>
        <button onClick={handleMultiply}>Multiply</button>
      </div>
      <br />
      <div>
        <p>Sum: {sum}</p>
        <p>Multiply: {multiply}</p>
      </div>
    </div>
  );
}

export default Bai1;