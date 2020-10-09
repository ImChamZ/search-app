import React from "react";

const SampleView = ({ increment, decrement, counter }) => {
  return (
    <>
      <h2>SampleView - hahaha mineeee</h2>
      <label>Current Click Count : {counter}</label>
      <div>
        <button onClick={() => increment()}>Increment Button</button>
        <button onClick={() => decrement()}>
          Decrement Button - Master Branch
        </button>
      </div>
    </>
  );
};

export default SampleView;
