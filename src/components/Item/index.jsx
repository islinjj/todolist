import React from 'react'

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false
        }
    }

    onDeleteItem = () => {
        this.props.onDelete(this.props.index)
    }
    onMark = () => {
        this.setState(prevState => ({
            done: !prevState.done
        }))
    }

    render() {
        console.log(this.props.done)
        return (
            <div>
                <label style={{ textDecorationLine: this.state.done ? 'line-through' : 'none' }}
                    onClick={this.onMark}>{this.props.text}</label>
                <button onClick={this.onDeleteItem}>X</button>
            </div>
        )
    }
}

export default Item