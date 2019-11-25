import { Injectable } from '@angular/core';
import { UserModel } from '../models/user-model';
import { TokenServiceService } from './token-service.service';
import { Subject } from 'rxjs';
import { RoutingServiceService } from './routing-service.service';
import { UserEditModel } from '../models/user-edit-model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  currentUser: UserModel;
  users: UserModel[] = [];
  editUser: UserModel;


  currentUserSub: Subject<UserModel> = new Subject<UserModel>();
  usersSub: Subject<UserModel[]> = new Subject<UserModel[]>();
  editUserSub: Subject<UserModel> = new Subject<UserModel>();

  constructor(private tokenService: TokenServiceService, private routingService: RoutingServiceService) { }

  getUsersForUser() {
    this.users = this.tokenService.getUsersForUser(this.currentUser.token);
    this.usersSub.next(this.users);
  }

  switchToEditUser(user: UserModel) {
    this.editUser = user;
    this.editUserSub.next(this.editUser);
    this.routingService.switchToUserEdit();
  }

  userEdit(userEditModel: UserEditModel) {
    this.editUser = this.tokenService.editUser(this.currentUser.token, userEditModel);
    this.editUserSub.next(this.editUser);
  }
}
