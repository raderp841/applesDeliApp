import { Injectable } from '@angular/core';
import { TempDataServiceService } from './temp-data-service.service';
import { UserServiceService } from './user-service.service';
import { TokenModel } from '../models/token-model';
import { HttpServiceService } from './http-service.service';
import { UserModel } from '../models/user-model';

@Injectable({
    providedIn: 'root'
})
export class LoginRegisterServiceService {

    constructor(private tempData: TempDataServiceService, private userService: UserServiceService, private httpService: HttpServiceService) { }

    login(username: string, password: string) {

        return this.httpService.loginHttp(username, password);
        
     
        //////////////////////////////////////////////////http request here
        //////////////////////////////////////////////////
        //let user = this.tempData.getUserByUsernamePassword(username, password);
        //this.userService.currentUser = user;
        //if (user == null) {
        //    return false;
        //}
        //localStorage.setItem('token', JSON.stringify(user.token));
        //return true;
    }

    loginToken(token: TokenModel) {
        let user = this.tempData.getUserByToken(token);
        if (user == null) {
            return false;
        }
        this.userService.currentUser = user;
        localStorage.setItem('token', JSON.stringify(user.token));
        return true;
    }

    setUser(user: UserModel) {
        this.userService.currentUser = user;
    }
}
