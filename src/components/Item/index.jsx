import React from 'react'

class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return
        <div>
            <p>{this.props.store.getState()}</p>
            <button>X</button>
        </div>
    }
}
export default Item