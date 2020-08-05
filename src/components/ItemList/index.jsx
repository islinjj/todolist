import React from 'react';
import Api from '../../api/Api';
import Item from '../Item';

class ItemList extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.texts);
    }

    onMark =(index) =>{
        this.props.markItem(index)
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

    onDeleteItem = (index) => {
        this.props.deleteItem(index)
    }

    render(){
        return (
            <div>
                 {
                    this.props.texts.map((val, key) => <Item
                        key={key} index={key} text={val.content} onDelete={this.onDeleteItem} remoteId = {val.id}
                        done={val.done} markItem={this.onMark} initList = {this.initList}
                    />)
                }
            </div>
        )
    }
}

export default ItemList