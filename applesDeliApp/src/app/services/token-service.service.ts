import { Injectable } from '@angular/core';
import { UserServiceService } from './user-service.service';
import { TempDataServiceService } from './temp-data-service.service';
import { TokenModel } from '../models/token-model';


@Injectable({
  providedIn: 'root'
})
export class TokenServiceService {
  

  constructor(private tempDataService: TempDataServiceService) { }

  getUsersForUser(token: TokenModel) {
    this.validateToken(token);
    return this.tempDataService.getUsersForUser(token);
  }

  private validateToken(token: TokenModel) {
    if (token == null || token.dateExpired <= new Date()) {
      console.log('token failed to validate');
      console.log(token);
      return false;
    }
    console.log('token validated');
    return true;
  }
}
