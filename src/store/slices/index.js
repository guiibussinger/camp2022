import { combineReducers } from '@reduxjs/toolkit';

import pokemon from './pokemonSlice';
import example from './exampleSlice';

const rootReducer = combineReducers({ pokemon, example });

export default rootReducer;
