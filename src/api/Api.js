const axios = require ('axios');
const todoBaseUrl = "/todos"
const host = "https://5e9ec500fb467500166c4658.mockapi.io"+todoBaseUrl

export default {
    getToDoList : function () {
        return axios.get(host)
    },

    putToDoList : function (id,) {
        
    },
    postToDo:function(data) {
        return axios.post(host, {data})
    },
    deleteToDo:function(id) {
        return axios.delete(host + `/${id}`)
    }
}
