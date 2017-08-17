import React from 'react';
import createReactClass from 'create-react-class'
import { connect, Provider } from 'react-redux'
import { actions } from './redux.js'

let CountBy = createReactClass({
    render: function() {
        return (
            <div>
                <button className="incrementButton" onClick={this.onClick}>Count by:</button>
                <input ref="val" className="incrementInput" type="number" defaultValue="1"></input>
            </div>
        );
    },

    onClick: function() {
        this.props.onCountByButtonClick(parseInt(this.refs.val.value));
    }
});

const mapStateToProps = (state) => {
    return { };
}
const mapDispatchToProps = (dispatch) => {
    return {
        onCountByButtonClick: (value) => {
            dispatch(actions.increment(value));
        }
    }
}

const CountByContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CountBy)

let App = createReactClass({
    render: function() {
        return (
            <Provider store={this.props.store}>
                <CountByContainer>
                </CountByContainer>
            </Provider>
        );
    }
});

export default App;
