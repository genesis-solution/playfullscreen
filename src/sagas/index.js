import { all } from 'redux-saga/effects'
import { http } from './http'

export default function * sagas () {
  yield all([
    ...http
  ])
}
