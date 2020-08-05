import { createAction } from '@reduxjs/toolkit';
import { ADD_ITEM, DELETE_ITEM, MARK_ITEM, FETCH_ITEM } from '../actions/actionType';

export const addItemAction = createAction(ADD_ITEM, (content, done, id) => ({ payload: { content: content, done: done, id: id } }));
export const deleteItemAction = createAction(DELETE_ITEM, (id) => ({ payload: { id } }));
export const markItemAction = createAction(MARK_ITEM, (id) => ({ payload: { id } }));
export const fetchItemAction = createAction(FETCH_ITEM, (items) => ({ payload: { items} }));
