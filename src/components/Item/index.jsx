import React from 'react'

class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    onDeleteItem = () =>{
        this.props.onDelete(this.props.index)
    }

    render() {
        return (
            <div>
                <label>{this.props.text}</label>
                <button onClick = {this.onDeleteItem}>X</button>
            </div>
        )
    }
}

export default Item