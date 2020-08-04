import React from 'react'
import { connect } from 'react-redux';

class Item extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            
            text: this.props.text
        }
    }

    showItem =() => {
        console.log(this.props.texts);
        this.setState({
            texts : this.props.texts
        })
    }
    render() {
        console.log('111',this.props.text);
        return (
            <div>
                <label>{this.state.text}</label>
                <button onClick = {this.showItem}>X</button>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return { texts: state.texts };
// }

// export default connect(mapStateToProps)(Item)
export default Item