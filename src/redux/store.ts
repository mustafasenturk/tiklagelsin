import {configureStore} from '@reduxjs/toolkit';
import {basketReducer} from './reducer';

const reducers = {
  basket: basketReducer,
};

const store = configureStore({
  reducer: reducers,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
