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
            <div>

                <List style = {{"display": "block"}}
                    itemLayout="horizontal"
                    dataSource={this.props.texts}
                    renderItem={(val,key) => (
                        <List.Item>
                            <Item
                        key={key} index={key} item={val} onDelete={this.onDeleteItem}
                        markItem={this.onMark} fetchItem={this.props.fetchItem} initList={this.props.initList}
                    />
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

export default ItemList