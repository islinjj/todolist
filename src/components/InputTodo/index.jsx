import React from 'react'
import { addItemAction, deleteItemAction, markItemAction } from '../../actions'
import { connect } from 'react-redux';
import ItemList from '../ItemList';
import Api from '../../api/Api'
import { Input } from 'antd';
import { Button } from 'antd';

const { Search } = Input;

class InputTodo extends React.Component {
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
        this.props.addItem(this.state.text, false)
        let data = {
            status: false,
            content: this.state.text
        }
        Api.postToDo(data)
        Api.getToDoList().then(res => {
            console.log(res.data)
        })
    }
    render() {
        return (
            <div style = {{"width":"30%","margin":"auto","display":"flex"}}>
                <Input onBlur={this.onChange} />
                <Button onClick={this.onAdd} size="middle">ADD</Button>
                {/* <input onBlur={this.onChange} /> */}
                {/* <button onClick={this.onAdd}>add</button> */}
            </div>
        )
    }
}

export default InputTodo