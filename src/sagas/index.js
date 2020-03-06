import { all, call, put, takeEvery } from "redux-saga/effects";
import { RENDER_NEWS, LOAD_NEWS } from "../actions";
import { retrieveTopHeadLinesList, retrieveSourceList } from "../services";

export function* fetchnewsList(action) {
  const headLinesList = yield call(retrieveTopHeadLinesList, action.payload);
  const sourcesList = yield call(retrieveSourceList);
  yield put({ type: RENDER_NEWS, response: { headLinesList, sourcesList } });
}

export function* loadnewsList() {
  yield takeEvery(LOAD_NEWS, fetchnewsList);
}

export default function* rootSaga() {
  yield all([loadnewsList()]);
}
