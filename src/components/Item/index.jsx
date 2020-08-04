import React from 'react'
import Api from '../../api/Api'
class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    onDeleteItem = () =>{
        this.props.onDelete(this.props.index)
        Api.deleteToDo(this.props.remoteId) 
        this.props.initList();
    }
    onMark = () => {
        Api.putToDoList(this.props.remoteId,!this.props.done)
        this.props.markItem(this.props.index)
    }

    render() {
        return (
            <div>
                <label style={{ textDecorationLine: this.props.done ? 'line-through' : 'none' }}
                 onClick={this.onMark}>{this.props.text}</label>
                <button onClick = {this.onDeleteItem}>X</button>
            </div>
        )
    }
}

export default Item