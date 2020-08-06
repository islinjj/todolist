import store from '../store';
import {LOADING} from '../actions/actionType'

const axios = require('axios');
const todoBaseUrl = "/todos"
const host = "https://5e9ec500fb467500166c4658.mockapi.io" + todoBaseUrl

const todoApi = axios.create({
    baseURL: host
})

export default {
    getToDoList: function () {
        return todoApi.get(host)
    },
    putToDoList: function (id, status) {
        return todoApi.put(host + `/${id}`, { "status": status })
    },
    postToDo: function (data) {
        return todoApi.post(host, data)
    },
    deleteToDo: function (id) {
        console.log('-->delete');
        return todoApi.delete(host + `/${id}`)
    }
}

todoApi.interceptors.request.use(request => {
    store.dispatch({ type: LOADING, payload: { loading: true } });
    return request;
}, error => error);

todoApi.interceptors.response.use(response => {
    store.dispatch({ type: LOADING, payload: { loading: false } });
    return response;
}, error => error);