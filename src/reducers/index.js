import { ADD_ITEM, DELETE_ITEM, MARK_ITEM } from '../actions/actionType';
import { createReducer } from '@reduxjs/toolkit';

const initState = {
    texts: [],
}

export default createReducer(initState, {
    [ADD_ITEM]: (state, action) => {
        return {
            texts: state.texts.concat(
                {
                    content: action.payload.inputText,
                    done: action.payload.done,
                    id:action.payload.id
                })
        }
    },
    [DELETE_ITEM]: (state, action) => (
        { texts: state.texts.filter((item, index) => index !== action.payload.index) }),

    [MARK_ITEM]: (state, action) => ({
        texts: state.texts.map((item, index) => {
            if (index === action.payload.index) {
                return { content: item.content, done: !item.done }
            }
            debugger
            return item
        })
    }),
})