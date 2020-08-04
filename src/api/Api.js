const axios = require ('axios');
const host = "https://5e9ec500fb467500166c4658.mockapi.io"
export default {
    getToDoList : function () {
        return axios.get(host +"/todos")
    },

    putToDoList : function () {
        
    }
}

