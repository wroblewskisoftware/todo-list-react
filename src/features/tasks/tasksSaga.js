import { takeEvery, call, put, delay } from "redux-saga/effects";
import {
  fetchExampleTasks,
  setTasks,
  fetchExampleTasksSuccess,
  fetchExampleTasksError,
} from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";

function* fetchExampleTasksHandler() {
  try {
    yield delay(1000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
    yield put(fetchExampleTasksSuccess());
  } catch (error) {
    yield call(alert, "Coś poszło nie tak!");
    yield put(fetchExampleTasksError());
  }
}

export function* watchFetchExampleTasks() {
  yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
}
