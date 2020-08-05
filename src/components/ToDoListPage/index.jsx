import React from 'react';
import InputTodo from '../InputTodo';
import ItemList from '../ItemList';
import { addItemAction, deleteItemAction, markItemAction, fetchItemAction } from '../../actions';
import { connect } from 'react-redux';
import Api from '../../api/Api'

class ToDoListPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this.initList()
    }

    initList = async () => {
        let response =  await Api.getToDoList()
        this.props.fetchItem(response.data)
    }

    render() {
        return (<div>
            <InputTodo addItem={this.props.addItem} />
            <ItemList texts={this.props.texts} markItem={this.props.markItem} deleteItem={this.props.deleteItem} initList={this.initList} />
        </div>)
    }
}

const mapStateToProps = state => {
    return { texts: state.texts };
}

const mapDispatchToProps = ({
    addItem: addItemAction,
    deleteItem: deleteItemAction,
    markItem: markItemAction,
    fetchItem: fetchItemAction
})


export default connect(mapStateToProps, mapDispatchToProps)(ToDoListPage)