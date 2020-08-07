import React from 'react';
import Item from '../Item';
import { deleteItemAction, markItemAction ,fetchItemAction} from '../../actions'
import { connect } from 'react-redux';
import Api from '../../api/Api'
class FinishList extends React.Component {
    constructor(props) {
        super(props)
    }


    initList = async () => {//todo learn 
        debugger
        let response = await Api.getToDoList()
        this.props.fetchItem(response.data)
    }
    render() {
        return (<div style={{"margin":"50px"}}>
            {
                this.props.texts.filter(item => item.status === true).map((val, key) =>
                    <Item
                        key={key} index={key} item={val} onDelete={this.props.deleteItem}
                        markItem={this.props.markItem} initList={this.initList}
                    />)
            }
        </div>)
    }
}

const mapStateToProps = state => {
    return { texts: state.todoReducer.texts };
}

const mapDispatchToProps = ({
    deleteItem: deleteItemAction,
    markItem: markItemAction,
    fetchItem: fetchItemAction
})


export default connect(mapStateToProps, mapDispatchToProps)(FinishList)