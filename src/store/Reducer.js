import { SAVE_SUCCESS, SAVE_FINRECORDID } from "../actions/Action";

const initialState = {
  success: null,
  displayInfoObj: null,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_SUCCESS: {
      console.log("in Save Success");

      return {
        ...state,
        success: action.param,
      };
    }

    case SAVE_FINRECORDID: {
      return {
        ...state,
        finRecordId: action.param,
      };
    }

    default:
      return state;
  }
}
