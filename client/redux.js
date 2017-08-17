import { createStore, applyMiddleware } from 'redux';
import _ from 'lodash';

const INCREMENT = 'INCREMENT';

const actions = {
    increment: function(value) {
        const increment = value || 1;
        return {
            type: INCREMENT,
            counter: increment
        };
    }
}

exports.actions = actions;

function app(state, action) {
    switch(action.type) {
        case INCREMENT: 
            const newcounter = state.counter + action.counter;
            return _.merge({ }, state, { counter: newcounter });
        default:
            return {
                counter: 0
            }
            break;
    }
}

exports.rootReducer = app;

