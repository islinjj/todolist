import React from 'react';
import Item from '../Item';
import { deleteItemAction, markItemAction } from '../../actions'
import { connect } from 'react-redux';

class FinishList extends React.Component {
    constructor(props) {
        super(props)
    }

    // static getDerivedStateFromProps(){
    //     this.props.texts.filter(item => item.done == true)
    //     return null
    // }
    onMark = () => {
        this.props.markItem(this.props.index)
    }
    onDeleteItem = () =>{
        this.props.deleteItem(this.props.index)
    }
    render() {
        return (<div>
            {
                this.props.texts.filter(item => item.done == true).map((val, key) => 
                <Item
                    key={key} index={key} text={val.content} onDelete={this.onDeleteItem}
                    done={val.done} markItem={this.onMark}
                />)
            }
        </div>)
    }
}

const mapStateToProps = state => {
    return { texts: state.texts };
}

const mapDispatchToProps = ({
    deleteItem: deleteItemAction,
    markItem: markItemAction
})


export default connect(mapStateToProps, mapDispatchToProps)(FinishList)