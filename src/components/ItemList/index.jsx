import React from 'react';
import Api from '../../api/Api';
import Item from '../Item';

class ItemList extends React.Component{
    constructor(props){
        super(props);
    }

    onMark =(index) =>{
        this.props.markItem(index)
    }

    onDeleteItem = (id) => {
        this.props.deleteItem(id)
        this.props.initList()
    }

    render(){
        return (
            <div>
                 {
                    this.props.texts.map((val, key) => <Item
                        key={key} index={key} item = {val} onDelete={this.onDeleteItem} 
                         markItem={this.onMark} initList = {this.initList}
                    />)
                }
            </div>
        )
    }
}

export default ItemList