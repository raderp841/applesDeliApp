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

  constructor(private ordersService: OrderServiceService) { }

  ngOnInit() {
    this.ordersSub = this.ordersService.ordersSub
      .subscribe(o => this.orders = o);
  }

  onOrderClicked(order: OrdersModel) {
    this.ordersService.switchToOrderDetail(order);
  }

  ngOnDestroy() {
    this.ordersSub.unsubscribe();
  }

}
