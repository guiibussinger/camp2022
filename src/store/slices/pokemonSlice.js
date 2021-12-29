import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  pokemonList: [],
  error: null
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    GET_POKEMONS: state => ({ ...state, isLoading: true }),
    GET_POKEMONS_SUCCESS: (state, { payload }) => ({
      ...state,
      isLoading: false,
      pokemonList: payload
    }),
    GET_POKEMONS_FAILURE: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload
    })
  }
});

const { actions, reducer } = pokemonSlice;

export const { GET_POKEMONS, GET_POKEMONS_SUCCESS, GET_POKEMONS_FAILURE } = actions;

export default reducer;
