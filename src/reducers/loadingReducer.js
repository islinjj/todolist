import { LOADING } from '../actions/actionType';
import { createReducer } from '@reduxjs/toolkit';
import { loading } from '../actions';

const initState = {
    loading: false
}

export default createReducer(initState, {
    [LOADING]: (state, action) => (
        { loading: action.payload.loading }
    ),
})