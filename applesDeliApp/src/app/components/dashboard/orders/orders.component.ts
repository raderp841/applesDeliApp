import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrdersModel } from '../../../models/orders-model';
import { Subscription } from 'rxjs';
import { OrderServiceService } from '../../../services/order-service.service';
import { StoreModel } from '../../../models/store-model';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit, OnDestroy {
    orders: OrdersModel[] = [];
    stores: StoreModel[] = [];
    ordersSub: Subscription = new Subscription();
    ordersOG: OrdersModel[] = [];

    constructor(private ordersService: OrderServiceService) { }

    ngOnInit() {
        this.ordersSub = this.ordersService.ordersSub
            .subscribe(o => {
                this.orders = o;
                this.ordersOG = o;
            });
        
    }

    onOrderClicked(order: OrdersModel) {
        this.ordersService.switchToOrderDetail(order);
    }

    onSearchKey(event: KeyboardEvent) {
        let inputValue = (<HTMLInputElement>document.getElementById('search')).value.toLowerCase();
        let ordersTemp = [];
        this.ordersOG.forEach(o => {
            if (o.nameForPickup.toLowerCase().indexOf(inputValue) !== -1) {
                ordersTemp.push(o);
            }
        });
        this.orders = ordersTemp;
    }

    ngOnDestroy() {
        this.ordersSub.unsubscribe();
    }

}
