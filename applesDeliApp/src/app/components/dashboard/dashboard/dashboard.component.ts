import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../../services/user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isOrderForm: boolean = true;
  isStoreOrders: boolean = false;

  constructor(private usersService: UserServiceService) { }

  ngOnInit() {
    if (this.usersService.currentUser.securityLevel >= 3) {
      this.isOrderForm = false;
      this.isStoreOrders = true;
    }
  }

}
