export class CustomersController {
    customers: ICustomer[] = null;

    static $inject = ['demoApp.dataService'];
    constructor(dataService: DataService) {
        this.getCustomers();
    }

    async getCustomers() {
      this.customers = await dataService.getCustomers();
    }
}
