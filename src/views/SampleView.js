import React from "react";

const SampleView = ({ increment, decrement, counter }) => {
  return (
    <>
      <h2>SampleView</h2>
      <label>Click Count : {counter}</label>
      <div>
        <button onClick={() => increment()}>Increment Button</button>
        <button onClick={() => decrement()}>Decrement - First Branch</button>
      </div>
    </>
  );
};

export default SampleView;
