import { Injectable } from '@angular/core';
import { TempDataServiceService } from './temp-data-service.service';
import { OrdersModel } from '../models/orders-model';
import { Subject } from 'rxjs';
import { RoutingServiceService } from './routing-service.service';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  orders: OrdersModel[] = [];
  ordersSub: Subject<OrdersModel[]> = new Subject<OrdersModel[]>();
  currentOrder: OrdersModel;
  currentOrderSub: Subject<OrdersModel> = new Subject<OrdersModel>();

  constructor(private tempDataService: TempDataServiceService, private routingService: RoutingServiceService) { }

  getOrdersForStore(storeId: number) {
    this.orders = this.tempDataService.getOrdersForStore(storeId).slice();
    this.ordersSub.next(this.orders.slice());
  }

  switchToOrderDetail(order: OrdersModel) {
    this.currentOrder = order;
    this.routingService.switchToOrder();
    this.currentOrderSub.next(this.currentOrder);
  }

  setOrder(order: OrdersModel) {
    this.currentOrder = order;
    this.currentOrderSub.next(this.currentOrder);
    this.tempDataService.updateOrder(order);
  }
}
