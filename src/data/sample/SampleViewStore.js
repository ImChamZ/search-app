import { ReduceStore } from "flux/utils";
import ApplicationDispatcher from "../common/ApplicationDispatcher";
import SampleViewActionTypes from "./SampleViewActionTypes";

class SampleViewStore extends ReduceStore {
  constructor() {
    super(ApplicationDispatcher);
    this.state = {};
  }

  getInitialState() {
    return 0;
  }

  reduce(state, action) {
    switch (action.type) {
      case SampleViewActionTypes.INCREMENT:
        return state + 1;
      case SampleViewActionTypes.DECREMENT:
        return state - 1;
      default:
        state;
    }
  }
}

export default new SampleViewStore();
