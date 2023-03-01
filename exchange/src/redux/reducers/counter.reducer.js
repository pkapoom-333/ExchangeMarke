import { SETTICKERDATA, FETCHDATA } from "../actionTypes";

const initialState = {
  tickerData: [],
};
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETTICKERDATA:
      return {
        ...state,
        tickerData: action.payload,
      };

    case FETCHDATA:
      return state;
    default:
      return state;
  }
};

export default counterReducer;
