import { call, put, takeEvery, all } from "redux-saga/effects";
import axios from "axios";
import { FETCHDATA } from "../actionTypes";
import { setTickerData } from "../actions/counter.action";

const apiKey = "live-e0a8c2800a3f4c75b2b3de937255c074";
const url = "https://satangcorp.com/api/v3/ticker/24hr";
const config = {
  headers: {
    Authorization: `Apikey ${apiKey}`,
  },
};

function* fetchTickerData() {
  try {
    const response = yield call(axios.get, url, config);
    yield put(setTickerData(response.data));
  } catch (error) {
    console.error(error);
  }
}

function* watchData() {
  yield takeEvery(FETCHDATA, fetchTickerData);
}

function* autoRefresh() {
  while (true) {
    yield put({ type: FETCHDATA });
    yield call(delay, 5000);
  }
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function* rootSaga() {
  yield all([watchData(), autoRefresh()]);
}
