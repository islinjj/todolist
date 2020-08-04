import React from 'react'
import { addItemAction, deleteItemAction } from '../../actions'
import { connect } from 'react-redux';
import Item from '../Item';

class InputText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    onChange = (event) => {
        this.setState({ text: event.target.value })
    }

    onAdd = () => {
        this.props.addItem(this.state.text)
    }

    onDeleteItem = (index) =>{
        console.log(index)
        this.props.deleteItem(index)
    }

    render() {
        return (
            <div>
                <input onBlur={this.onChange} />
                <button onClick={this.onAdd}>add</button>
                {
                    this.props.texts.map((val, key) => <Item
                        key={key} index={key} text={val} onDelete= {this.onDeleteItem}
                    />)
                }

            </div>
        )
    }
}
const mapStateToProps = state => {
    return { texts: state.texts };
}

const mapDispatchToProps = ({
    addItem: addItemAction,
    deleteItem: deleteItemAction
})


export default connect(mapStateToProps, mapDispatchToProps)(InputText)