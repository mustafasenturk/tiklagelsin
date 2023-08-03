import {createAction} from '@reduxjs/toolkit';
import {IMenu} from './types';

export const addMenu = createAction<IMenu>('ACTION/ADD');
export const delMenuItem = createAction<{id: number}>('ACTION/DEL');
export const clearBasket = createAction('ACTION/CLEAR');
export const changeCount = createAction<{id: number; count: number}>(
  'ACTION/COUNT_CHANGE',
);
