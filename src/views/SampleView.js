import React from "react";

const SampleView = ({ increment, decrement, counter }) => {
  return (
    <>
      <h2>SampleView - Changed From Second Branch</h2>
      <label>Click Count : {counter}</label>
      <div>
        <button onClick={() => increment()}>Increment Button</button>
        <button onClick={() => decrement()}>Decrement Button</button>
      </div>
    </>
  );
};

export default SampleView;
