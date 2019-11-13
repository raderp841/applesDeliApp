import { Component, OnInit, OnDestroy } from '@angular/core';
import { RoutingServiceService } from '../../services/routing-service.service';
import { Subscription, Subscribable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  isLoginRegister: boolean = false;
  isDashboard: boolean = false;
  isOrder: boolean = false;

  isLoginRegisterSub: Subscription = new Subscription();
  isDashboardSub: Subscription = new Subscription();
  isOrderSub: Subscription = new Subscription();

  constructor(private routingService: RoutingServiceService) { }

  ngOnInit() {
    this.isLoginRegister = this.routingService.isLoginRegister;
    this.isLoginRegisterSub = this.routingService.isLoginRegisterSub
      .subscribe(x => this.isLoginRegister = x);
    this.isDashboardSub = this.routingService.isDashBoardSub
      .subscribe(x => this.isDashboard = x);
    this.isOrderSub = this.routingService.isOrderSub
      .subscribe(x => this.isOrder = x);
  }

  ngOnDestroy() {
    this.isLoginRegisterSub.unsubscribe();
    this.isDashboardSub.unsubscribe();
    this.isOrderSub.unsubscribe();
  }

}
