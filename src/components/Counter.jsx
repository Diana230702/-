import React, { useState } from "react";

const Counter = ({ counter, increment, decrement }) => {
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={increment}> + </button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
