import { call, put, takeEvery } from 'redux-saga/effects'
import * as constants from './constants'

const apiUrl = `https://jsonplaceholder.typicode.com/users`;
function getApi() {
  return fetch(apiUrl, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',

      }
  }).then(response => response.json())
    .catch((error) => {throw error})
}

function* fetchUsers(action) {
   try {
      const users = yield call(getApi);
      yield put({type: constants.GET_STUDENTS_SUCCESS, users: users});
   } catch (e) {
      yield put({type: constants.GET_STUDENTS_FAILED, message: e.message});
   }
}

function* userSaga() {
   yield takeEvery(constants.GET_STUDENTS_REQUEST, fetchUsers);
}

export default userSaga;