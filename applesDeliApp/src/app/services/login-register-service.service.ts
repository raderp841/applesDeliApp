import { Injectable } from '@angular/core';
import { TempDataServiceService } from './temp-data-service.service';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterServiceService {

  constructor(private tempData: TempDataServiceService, private userService: UserServiceService) { }

  login(username: string, password: string) {
    //////////////////////////////////////////////////http request here
    //////////////////////////////////////////////////
    let user = this.tempData.getUserByUsernamePassword(username, password);
    this.userService.currentUser = user;
    if (user == null) {
      return false;
    }
    return true;
  }
}
