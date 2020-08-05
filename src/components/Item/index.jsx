import React from 'react'
import Api from '../../api/Api'
import { Button } from 'antd';
import { Row, Col } from 'antd';
class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    onDeleteItem = () => {
        this.props.onDelete(this.props.item.id)
        Api.deleteToDo(this.props.item.id)
    }
    onMark = () => {
        Api.putToDoList(this.props.item.id, !this.props.item.status)
        this.props.markItem(this.props.item.id)
    }

    render() {
        return (
            <div>
                {
                <Row justify="center" align="top">
                    <Col span={18}><label style={{ textDecorationLine: this.props.item.status ? 'line-through' : 'none' }}
                        onClick={this.onMark}>{this.props.item.content}</label>
                    </Col>
                    <Col span={4}><Button type="danger" onClick = {this.onDeleteItem}>delete</Button>
                    </Col>
                </Row>
                /* <Row>
                    <Col span={18}></Col>
                    <Col span={6}></Col>
                </Row> */}
                {/* <button onClick = {this.onDeleteItem}>X</button> */}
            </div>
        )
    }
}

export default Item