import React from 'react';
import InputTodo from '../InputTodo';
import ItemList from '../ItemList';
import { addItemAction, deleteItemAction, markItemAction, fetchItemAction } from '../../actions';
import { connect } from 'react-redux';
import Api from '../../api/Api'
import { PageHeader } from 'antd'

class ToDoListPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.initList()
    }

    initList = async () => {//todo learn 
        let response = await Api.getToDoList()
        console.log(response.data);
        this.props.fetchItem(response.data)
    }

    render() {//todo use antd div
        return (<div>
            <PageHeader
                className="site-page-header"
                title="To Do List"
            />
            <InputTodo addItem={this.props.addItem} onInitList={this.initList} />
            <ItemList texts={this.props.texts} fetchItem={this.props.fetchItem} markItem={this.props.markItem} deleteItem={this.props.deleteItem} initList={this.initList} />
        </div>)
    }
}

const mapStateToProps = state => {
    return { texts: state.todoReducer.texts };
}

const mapDispatchToProps = ({
    addItem: addItemAction,
    deleteItem: deleteItemAction,
    markItem: markItemAction,
    fetchItem: fetchItemAction
})


export default connect(mapStateToProps, mapDispatchToProps)(ToDoListPage)