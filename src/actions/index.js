import {createAction} from '@reduxjs/toolkit';
import {ADD_ITEM,DELETE_ITEM} from '../actions/actionType';

export const addItemAction = createAction(ADD_ITEM,(inputText)=>({payload:{inputText}}));
export const deleteItemAction = createAction(DELETE_ITEM,(index)=>({payload:{index}}));