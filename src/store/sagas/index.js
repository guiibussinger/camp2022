import { all } from 'redux-saga/effects';

import pokemonSaga from './pokemonSaga';

function* rootSaga() {
  yield all([pokemonSaga()]);
}

export default rootSaga;
