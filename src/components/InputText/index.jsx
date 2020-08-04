import React from 'react'
import store from '../../store'
import { addItemAction } from '../../actions'
import { connect } from 'react-redux';
class InputText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    addItem = () => {
        console.log(this.state.text);
        this.props.texts.push(this.state.text);
    }

    onChange = (event) => {
        this.setState({ text: event.target.value })
    }

    render() {
        return (
            <div>
                <input onBlur={this.onChange} />
                <button onClick={this.addItem}>add</button>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return { texts: state.texts };
}

const mapDispatchToProps = dispatch => ({
    addItem: addItemAction
})


export default connect(mapStateToProps,mapDispatchToProps)(InputText)