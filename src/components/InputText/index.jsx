import React from 'react'
import { addItemAction, deleteItemAction, markItemAction } from '../../actions'
import { connect } from 'react-redux';
import Item from '../Item';
import Api from '../../api/Api'
class InputText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    componentDidMount(){

        this.initList()
    }
    initList = () => {
        let that = this
        Api.getToDoList().then(res=>{
            console.log(res.data)

        })
        console.log(this.state.list)
    }
    onChange = (event) => {
        this.setState({ text: event.target.value })
    }

    onAdd = () => {
        this.props.addItem(this.state.text,false)
    }

    onDeleteItem = (index) => {
        this.props.deleteItem(index)
    }

    onMark =(index) =>{
        this.props.markItem(index)
    }
    render() {
        console.log("list",this.state.list)
        return (
            <div>
                <input onBlur={this.onChange} />
                <button onClick={this.onAdd}>add</button>
                {
                    this.state.list.map((val, key) => <Item
                        key={key} index={key} text={val.content} onDelete={this.onDeleteItem}
                        done={val.done} markItem={this.onMark}
                    />)
                    
                    // Api.getToDoList().then(res=>{
                    //     console.log(res.data)
                    //     res.data.map((val,key) => <Item
                    //         key={key} index={key} text={val.content} onDelete={this.onDeleteItem}
                    //         done={val.status} markItem={this.onMark}
                    //     />) 
                    // })
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
    deleteItem: deleteItemAction,
    markItem: markItemAction

})


export default connect(mapStateToProps, mapDispatchToProps)(InputText)