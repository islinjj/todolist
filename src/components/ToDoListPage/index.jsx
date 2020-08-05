import React from 'react';
import InputTodo from '../InputTodo';
import ItemList from '../ItemList';
import { addItemAction, deleteItemAction, markItemAction } from '../../actions';
import { connect } from 'react-redux';
import Api from '../../api/Api'

class ToDoListPage extends React.Component {
    constructor(props) {
        super(props);
        this.initList();
    }

    initList = () => {
        let that = this
        Api.getToDoList().then(res=>{
            console.log(res.data)
            for(var key in res.data){
                that.props.addItem(res.data[key].content,res.data[key].status,res.data[key].id)
            }
        })
    }

    render() {
        return (<div>
            <InputTodo addItem={this.props.addItem} />
            <ItemList texts = {this.props.texts} markItem={this.props.markItem} deleteItem={this.props.deleteItem} />
        </div>)
    }
}

const mapStateToProps = state => {
    return { texts: state.texts };
}

const mapDispatchToProps = ({
    addItem: addItemAction,
    deleteItem: deleteItemAction,
    markItem: markItemAction
})


export default connect(mapStateToProps, mapDispatchToProps)(ToDoListPage)
// export default Container