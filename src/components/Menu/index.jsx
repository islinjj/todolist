import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

class TopMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 100 }}
                    mode="inline"
                >
                    <Menu.ItemGroup key="g1">
                        <Menu.Item key="1"><Link to='/'>todo</Link></Menu.Item>
                        <Menu.Item key="2"><Link to='/finish'>finish</Link></Menu.Item>
                    </Menu.ItemGroup>
                </Menu>
            </div>
        )
    }
}

export default TopMenu