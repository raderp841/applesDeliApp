import { Injectable } from '@angular/core';
import { TempDataServiceService } from './temp-data-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterServiceService {

  constructor(private tempData: TempDataServiceService) { }

  login(username: string, password: string) {
    //////////////////////////////////////////////////http request here
    //////////////////////////////////////////////////
    if (this.tempData.getUserByUsernamePassword(username, password)) {
      return true;
    }
    return false;
  }
}
