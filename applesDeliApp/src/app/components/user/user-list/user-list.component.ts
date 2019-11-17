import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserModel } from '../../../models/user-model';
import { UserServiceService } from '../../../services/user-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  users: UserModel[] = [];
  usersSub: Subscription = new Subscription();
  constructor(private userService: UserServiceService) { }

  ngOnInit() {
    this.usersSub = this.userService.usersSub
      .subscribe(u => this.users = u);
    this.userService.getUsersForUser();
    console.log(this.users);
  }

  onViewUser(user: UserModel) {
    this.userService.switchToEditUser(user);
  }

  ngOnDestroy() {
    this.usersSub.unsubscribe();
  }

}
