import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link to='/'>todo</Link>
                <span> / </span>
                <Link to='/finish'>finish</Link>
            </div>
        )
    }
}

export default Menu