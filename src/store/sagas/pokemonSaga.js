import { call, put, takeEvery } from 'redux-saga/effects';

import { GET_POKEMONS, GET_POKEMONS_SUCCESS, GET_POKEMONS_FAILURE } from '../slices/pokemonSlice';

import api from '../../services/api';

function* getPokemons() {
  try {
    const {
      data: { results }
    } = yield call(api.get, '/pokemon?limit=100');

    yield put(GET_POKEMONS_SUCCESS(results));
  } catch (error) {
    yield put(GET_POKEMONS_FAILURE(error));
  }
}

export default function* watcher() {
  yield takeEvery(GET_POKEMONS, getPokemons);
}
