import { Component, OnInit, OnDestroy } from '@angular/core';
import { TempDataServiceService } from '../../../services/temp-data-service.service';
import { UserServiceService } from '../../../services/user-service.service';
import { StoreModel } from '../../../models/store-model';
import { StoreServiceService } from '../../../services/store-service.service';
import { Subscription } from 'rxjs';
import { OrderServiceService } from '../../../services/order-service.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit, OnDestroy {
  stores: StoreModel[] = [];
  storesSub: Subscription = new Subscription();

  constructor(private storeService: StoreServiceService, private ordersService: OrderServiceService, private usersService: UserServiceService) { }

  ngOnInit() {
    this.storesSub = this.storeService.StoresSub
      .subscribe(s => this.stores = s);
    this.storeService.getStoresByToken(this.usersService.currentUser.token);
  }

  onClickStore(store: StoreModel) {
    this.ordersService.getOrdersForStore(store.id);
  }

  ngOnDestroy() {
    this.storesSub.unsubscribe();
  }

}
