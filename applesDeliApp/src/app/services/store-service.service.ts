import { Injectable } from '@angular/core';
import { TempDataServiceService } from './temp-data-service.service';
import { StoreModel } from '../models/store-model';
import { Subject } from 'rxjs';
import { TokenModel } from '../models/token-model';

@Injectable({
  providedIn: 'root'
})
export class StoreServiceService {

  stores: StoreModel[] = [];
  StoresSub: Subject<StoreModel[]> = new Subject<StoreModel[]>();
  allStores: StoreModel[] = [];
  storesForEdit: StoreModel[] = [];
  storesForEditSub: Subject<StoreModel[]> = new Subject<StoreModel[]>();

  constructor(private tempDataService: TempDataServiceService) { }

  getStoresByToken(token: TokenModel) {
    this.stores = this.tempDataService.getStoresForUser(token);
    this.StoresSub.next(this.stores);  
  }

  getAllStores() {
    this.allStores = this.tempDataService.getAddStores();
    return this.allStores.slice();
  }

  getStoresForUserEdit(userId: number) {
    this.storesForEdit = this.tempDataService.getStoresByUserId(userId);
    this.storesForEditSub.next(this.storesForEdit);
  }
}
