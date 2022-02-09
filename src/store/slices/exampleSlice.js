import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0
};

const exampleSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    INCREASE_COUNT: state => ({ count: state.count + 1 })
  }
});

const { actions, reducer } = exampleSlice;

export const { INCREASE_COUNT } = actions;

export default reducer;
