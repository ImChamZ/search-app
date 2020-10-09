import ApplicationDispatcher from "../common/ApplicationDispatcher";
import SampleViewActionTypes from "./SampleViewActionTypes";

const SampleViewActions = {
  increment() {
    ApplicationDispatcher.dispatch({ type: SampleViewActionTypes.INCREMENT });
  },

  decrement() {
    ApplicationDispatcher.dispatch({ type: SampleViewActionTypes.DECREMENT });
  },
};

export default SampleViewActions;
