import { all } from 'redux-saga/effects'
import classSaga from './class/classSaga'

export default function* rootSaga() {
  yield all([
    classSaga(),
  ])
}