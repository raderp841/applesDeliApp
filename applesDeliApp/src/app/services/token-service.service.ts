import { Injectable } from '@angular/core';
import { UserServiceService } from './user-service.service';
import { TempDataServiceService } from './temp-data-service.service';
import { TokenModel } from '../models/token-model';
import { UserEditModel } from '../models/user-edit-model';


@Injectable({
  providedIn: 'root'
})
export class TokenServiceService {
  

  constructor(private tempDataService: TempDataServiceService) { }

  getUsersForUser(token: TokenModel) {
    this.validateToken(token);
    return this.tempDataService.getUsersForUser(token);
  }

  editUser(token: TokenModel, userEditModel: UserEditModel) {
    this.validateToken(token);
    return this.tempDataService.updateUser(userEditModel);
  }

  private validateToken(token: TokenModel) {
    if (token == null || token.dateExpired <= new Date()) {
      return false;
    }
    return true;
  }
}
