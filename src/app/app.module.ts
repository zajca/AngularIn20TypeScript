import 'babel-core/browser-polyfill.js';
import {DataService} from './services/data.service.ts';
import {CustomersController} from './controllers/customers.controller.ts';
import {OrdersController} from './controllers/orders.controller.ts';
import {FilterTextbox} from './directives/filterTextbox.directive.ts';

let app = angular.module('demoApp', ['ngRoute', 'ngAnimate'])
.service('demoApp.dataService', DataService)
.directive('filterTextbox', FilterTextbox.instance)
.config(['$routeProvider', ($routeProvider) => {
    $routeProvider.when('/',
    {
        controller: CustomersController,
        templateUrl: 'app/views/customers.html',
        controllerAs: 'vm'
    })
    .when('/orders/:customerId',
    {
        controller: OrdersController,
        templateUrl: 'app/views/orders.html',
        controllerAs: 'vm'
    });
}]);
