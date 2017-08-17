import React from 'react';
import createReactClass from 'create-react-class'
import { connect, Provider } from 'react-redux'
import { actions } from './redux.js'

let ReactButton = createReactClass({
    render: function() {
        return (
            <div>
                <button className="incrementButton" onClick={this.onClick}>Count by:</button>
                <input ref="val" className="incrementInput" type="number" defaultValue="1"></input>
            </div>
        );
    },

    onClick: function() {
        this.props.onReactButtonClick(parseInt(this.refs.val.value));
    }
});

const mapStateToProps = (state) => {
    return { };
}
const mapDispatchToProps = (dispatch) => {
    return {
        onReactButtonClick: (value) => {
            dispatch(actions.increment(value));
        }
    }
}

const ReactButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ReactButton)

let App = createReactClass({
    render: function() {
        return (
            <Provider store={this.props.store}>
                <ReactButtonContainer>
                </ReactButtonContainer>
            </Provider>
        );
    }
});

export default App;
