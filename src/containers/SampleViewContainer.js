import React, { Component } from "react";
import { Container } from "flux/utils";
import SampleViewActions from "../data/sample/SampleViewActions";
import SampleViewStore from "../data/sample/SampleViewStore";
import SampleView from "../views/SampleView";

class SampleViewContainer extends Component {
  static getStores() {
    return [SampleViewStore];
  }

  static calculateState(prevState, props) {
    const state = {
      //states
      counter: SampleViewStore.getState(),
      //actions
      increment: SampleViewActions.increment,
      decrement: SampleViewActions.decrement,
    };
    let mergedState = Object.assign({}, props, state);
    return mergedState;
  }

  render() {
    return <SampleView {...this.state}></SampleView>;
  }
}

export default Container.create(SampleViewContainer);
