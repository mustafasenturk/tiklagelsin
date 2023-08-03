import {createReducer} from '@reduxjs/toolkit';
import {addMenu, changeCount, clearBasket, delMenuItem} from './actions';
import {IInitialState} from './types';

const initialState: IInitialState = {
  basket: [],
};

export const basketReducer = createReducer(initialState, builder => {
  builder
    .addCase(addMenu, (state, action) => {
      state.basket.push(action.payload);
    })
    .addCase(delMenuItem, (state, action) => {
      state.basket = state.basket.filter(item => item.id !== action.payload.id);
    })
    .addCase(changeCount, (state, {payload: {id, count}}) => {
      const index = state.basket.findIndex(item => item.id === id);
      if (index !== -1) {
        state.basket[index].count += count;
      }
    })
    .addCase(clearBasket, state => {
      state.basket = [];
    });
});
