import React from 'react'
import Api from '../../api/Api'
class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    onDeleteItem = () =>{
        this.props.onDelete(this.props.item.id)
        Api.deleteToDo(this.props.item.id) 
    }
    onMark = () => {
        Api.putToDoList(this.props.item.id,!this.props.item.status)
        this.props.markItem(this.props.item.id)
    }

    render() {
        return (
            <div>
                <label style={{ textDecorationLine: this.props.item.status ? 'line-through' : 'none' }}
                 onClick={this.onMark}>{this.props.item.content}</label>
                <button onClick = {this.onDeleteItem}>X</button>
            </div>
        )
    }
}

export default Item