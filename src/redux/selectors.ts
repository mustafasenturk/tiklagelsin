import {createSelector} from '@reduxjs/toolkit';
import {RootState} from './store';

const basketSelector = (state: RootState) => state;

export const selectBasket = createSelector(
  basketSelector,
  state => state.basket,
);
