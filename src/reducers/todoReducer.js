import { ADD_ITEM, DELETE_ITEM, MARK_ITEM ,FETCH_ITEM} from '../actions/actionType';
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
        { texts: state.texts.filter(item => item.id !== action.payload.id) }),

    [MARK_ITEM]: (state, action) => ({
        texts: state.texts.map(item => {
            if (item.id === action.payload.id) {
                return { content: item.content, status: !item.status }
            }
            return item
        })
    }),
    [FETCH_ITEM] :  (state, action) => ({
        texts:action.payload.items
    }),
})