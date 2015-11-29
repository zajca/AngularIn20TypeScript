export interface ICustomer {
    id: number;
    name: string;
    total: number;
}

export interface IOrder {
    product: string;
    total: number;
}

export class DataService {

    static $inject = ['$http'];
    constructor(private $http: ng.IHttpService) {}

    async getCustomers(): ng.IHttpPromiseCallbackArg<ICustomer[]> {
        let response = await this.$http.get('customers.json');
        return response.data;
    }

    async getOrder(id: number): ng.IHttpPromiseCallbackArg<IOrder[]> {
       let response = await this.$http.get('orders.json');
       return response.data;
    }
}
