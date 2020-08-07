import React from 'react';
import Api from '../../api/Api';
import Item from '../Item';
import { List, Avatar } from 'antd';

class ItemList extends React.Component {
    constructor(props) {
        super(props);
    }

    onMark = (id) => {
        this.props.markItem(id)
    }

    onDeleteItem = (id) => {
        this.props.deleteItem(id)
        this.props.initList()
    }

    render() {
        return (
            <div style={{ "padding": "10px" }}>
                <List style={{ "display": "block" }}
                    itemLayout="horizontal"
                    dataSource={this.props.texts}
                    className="demo-loadmore-list"
                    renderItem={(val, key) => (
                        <List.Item>
                            <Item
                                key={key} index={key} item={val} onDelete={this.onDeleteItem}
                                markItem={this.onMark} fetchItem={this.props.fetchItem} initList={this.props.initList}
                            />
                        </List.Item>
                    )}
                />

                {/* <List
                    className="demo-loadmore-list"
                    itemLayout="horizontal"
                    dataSource={this.props.texts}
                    renderItem={(val, key) => (
                        <List.Item
                            actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
                        >
                        </List.Item>
                    )}
                /> */}
            </div>
        )
    }
}

export default ItemList