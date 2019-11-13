import { Injectable } from '@angular/core';
import { TempDataServiceService } from './temp-data-service.service';
import { StoreModel } from '../models/store-model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreServiceService {

  stores: StoreModel[] = [];
  StoresSub: Subject<StoreModel[]> = new Subject<StoreModel[]>();

  constructor(private tempDataService: TempDataServiceService) { }

  getStoresByToken() {
    this.stores = this.tempDataService.getStoresForUser();
    this.StoresSub.next(this.stores);  
  }
}
