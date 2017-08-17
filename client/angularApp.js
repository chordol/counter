import React from 'react';
import ReactDOM from 'react-dom';
import angular from 'angular';
import ngRedux from 'ng-redux';
import { rootReducer, actions } from './redux';
import App from './reactApp';

class ValuePresenterController {
    constructor($ngRedux) {
        this.counter = 0;
        this.unsubscribe = $ngRedux.connect(this.mapStateToThis, actions)(this);
    }

    $onDestroy(){
        this.unsubscribe();
    }

    mapStateToThis(state) {
        return {
            counter: state.counter
        };
    }
} 

class ValuePresenter {
    constructor () {
        return {
            restrict: 'E',
            template: '<div class="counter">{{vm.counter}}</div>',
            scope: {
                counter: '@'
            },
            controller: ValuePresenterController,
            controllerAs: 'vm',
            bindToController: true
        };
    }
}

angular.module('angular-app', [ ngRedux ])
    .config(($ngReduxProvider) => {
        $ngReduxProvider.createStoreWith(rootReducer);
    })
    .run(($ngRedux, $rootScope, $timeout) => {
        ReactDOM.render(
            <App store={ $ngRedux }/>,
            document.getElementById('react_container')
        );
    })
    .directive('valuePresenter', () => new ValuePresenter());
    
