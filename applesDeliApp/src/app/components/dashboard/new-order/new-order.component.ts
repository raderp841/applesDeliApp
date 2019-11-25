import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StoreModel } from '../../../models/store-model';
import { StoreServiceService } from '../../../services/store-service.service';
import { OrderServiceService } from '../../../services/order-service.service';
import { OrdersModel } from '../../../models/orders-model';
import { RoutingServiceService } from '../../../services/routing-service.service';

@Component({
    selector: 'app-new-order',
    templateUrl: './new-order.component.html',
    styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {

    orderForm: FormGroup;
    stores: StoreModel[] = [];
    orderForSubmit: OrdersModel = null;

    constructor(private storesService: StoreServiceService, private orderService: OrderServiceService, private routingService: RoutingServiceService) { }

    ngOnInit() {
        this.stores = this.storesService.getAllStores();
        this.setUpForm();
    }

    submitOrder() {
        
        this.setOrderFromForm();
        this.orderService.saveNewOrder(this.orderForSubmit);
        this.routingService.switchToDashboard();
    }

    setUpForm() {
        this.orderForm = new FormGroup({
            'storeid': new FormControl(''),
            'pickupdate': new FormControl('', Validators.required),
            'pickuptime': new FormControl('', Validators.required),
            'nameforpickup': new FormControl('', Validators.required),
            'phonenumber': new FormControl('', Validators.required),
            'chickenpcs': new FormControl('', Validators.required),
            'jojopcs': new FormControl('', Validators.required),
            'details': new FormControl('', Validators.required),
        });
    }

    setOrderFromForm() {
        this.orderForSubmit = new OrdersModel(
            -1,
            -1,
            this.orderForm.controls['storeid'].value,
            new Date(),
            this.orderForm.controls['pickupdate'].value,
            '12',
            this.orderForm.controls['pickuptime'].value,
            this.orderForm.controls['nameforpickup'].value,
            this.orderForm.controls['phonenumber'].value,
            this.orderForm.controls['chickenpcs'].value,
            this.orderForm.controls['jojopcs'].value,
            this.orderForm.controls['details'].value,
            true,
            false,
            false

        );
    }

}
