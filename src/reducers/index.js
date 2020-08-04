import { ADD_ITEM, DELETE_ITEM } from '../actions/actionType';
import { createReducer } from '@reduxjs/toolkit';

const initState = {
    texts : []
}

export default createReducer(initState, {
    [ADD_ITEM]: ((state, action) => { return { text: state.text } })
})