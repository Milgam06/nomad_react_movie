import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  function PlusClicking() {
    setCount(count + 1);
  }
  function MinusClicking() {
    setCount(count - 1);
  }
  function ResetClicking() {
    setCount(0);
  }
  return (
    <div>
      <h3>Total Click: {count}</h3>
      <button id="plusBtn" onClick={PlusClicking}>
        +
      </button>
      <button id="minusBtn" onClick={MinusClicking}>
        -
      </button>
      <br />
      <button id="resetBtn" onClick={ResetClicking}>
        RESET
      </button>
    </div>
  );
}

export default App;
