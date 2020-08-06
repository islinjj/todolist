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
                        markItem={this.onMark} initList={this.initList}
                    />
                        </List.Item>
                    )}
                />
                {
                    // this.props.texts.map((val, key) => <Item
                    //     key={key} index={key} item={val} onDelete={this.onDeleteItem}
                    //     markItem={this.onMark} initList={this.initList}
                    // />)
                }
            </div>
        )
    }
}

export default ItemList