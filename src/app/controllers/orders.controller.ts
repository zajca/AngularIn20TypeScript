import {IOrder, DataService} from '../services/data.service.ts'


export class OrdersController {

    customerId: number;
    orders: IOrder[];
    dataService: DataService;

    static $inject = ['$routeParams', 'demoApp.dataService'];
    constructor($routeParams, dataService: DataService) {
      this.dataService = dataService;
        this.customerId = $routeParams.customerId;
        this.getOrders();
    }

    async getOrders() {
      this.orders = await this.dataService.getOrder(this.customerId);
    }
}
