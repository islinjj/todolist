const axios = require ('axios');
const host = "https://5e9ec500fb467500166c4658.mockapi.io"

const todoBaseUrl = "/todos"

export default {
    getToDoList : function () {
        return axios.get(host +"/todos")
    },

    putToDoList : function () {
        
    },
    postToDo:function(data) {
        return axios.post(host + "todo", data)
    },
    deleteToDo:function(id) {
        return axios.delete(host + `/todos/${id}`)
    }
}

