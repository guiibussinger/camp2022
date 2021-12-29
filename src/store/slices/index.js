import { combineReducers } from '@reduxjs/toolkit';

import pokemon from './pokemonSlice';

const rootReducer = combineReducers({ pokemon });

export default rootReducer;
