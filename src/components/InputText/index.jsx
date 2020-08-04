import React from 'react'
import { addItemAction } from '../../actions'
import { connect } from 'react-redux';
import Item from '../Item';

class InputText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }


    onChange = (event) => {
        this.setState({ text: event.target.value })
    }

    onAdd = () => {
        this.props.addItem(this.state.text)
    }

    render() {
        const initTexts = this.props.texts;
        console.log('222', this.props.texts);
        return (
            <div>
                <input onBlur={this.onChange} />
                <button onClick={this.onAdd}>add</button>
                {
                    this.props.texts.map((val,key) => <Item
                    key={key} index={key} text={val}
                    />)
                }

            </div>
        )
    }
}
const mapStateToProps = state => {
    return { texts: state.texts };
}

const mapDispatchToProps = ({
    addItem: addItemAction
})


export default connect(mapStateToProps, mapDispatchToProps)(InputText)