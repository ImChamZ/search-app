import React, { Component } from "react";
import SampleViewContainer from "./containers/SampleViewContainer";

class App extends Component {
  render() {
    return (
      <>
        <h1>Hello World from React + Webpack + Babel + Flux Boilerplate </h1>
        <SampleViewContainer></SampleViewContainer>
      </>
    );
  }
}
export default App;
