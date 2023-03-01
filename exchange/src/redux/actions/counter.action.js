import { FETCHDATA, SETTICKERDATA } from "../actionTypes";

export const fetchData = () => ({
  type: FETCHDATA,
});

export const setTickerData = (data) => ({
  type: SETTICKERDATA,
  payload: data,
});
