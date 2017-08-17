import React from 'react';
import ReactDOM from 'react-dom';
import angular from 'angular';
import ngRedux from 'ng-redux';
import { rootReducer, actions } from './redux';
import App from './reactApp';

class CountController {
    constructor($ngRedux, $scope, $timeout) {
        this.counter = 0;
        this.unsubscribe = $ngRedux.connect(this.mapStateToThis, actions)(this);
        this.$scope = $scope;
        this.$scope.$watch(() => this.counter, this.countIncremented.bind(this))
        this.$timeout = $timeout;
    }

    $onDestroy(){
        this.unsubscribe();
    }

    mapStateToThis(state) {
        return {
            counter: state.counter
        };
    }

    countIncremented(newValue, oldValue) {
        if(newValue) {
            angular.element(document.querySelector('.count')).addClass('increment');
            this.$timeout(() => {
                angular.element(document.querySelector('.count')).removeClass('increment');
            }, 1000);
        }
    }
} 

class Count {
    constructor () {
        return {
            restrict: 'E',
            template: `<div class="counter">
                <img class="countvoncount" src="count.jpeg" alt="">
                <p class="count">{{vm.counter}}</p>
            </div>`,
            scope: {
                counter: '@'
            },
            controller: CountController,
            controllerAs: 'vm',
            bindToController: true,
            link: function(scope, elem, attr, ctrl) {
                ctrl.el = elem;
            }
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
    .directive('count', () => new Count());
    
