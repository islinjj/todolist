import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

class TopMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    menu = {
        current: 'todolist',
        second: 'finish'
    };

    handleClick = e => {
        this.setState({ current: e.key });
    };

    render() {
        const { current } = this.menu;
        return (
            <div>
                <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                    <Menu.Item key="todolist">
                        <Link to='/'>TO DO</Link>
                    </Menu.Item>
                    <Menu.Item key="finish">
                        <Link to='/finish'>FINISH</Link>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default TopMenu