import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { RoutingServiceService } from '../../../services/routing-service.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit, OnDestroy {
  isLogin: boolean = false;
  isRegister: boolean = false;

  isLoginSub: Subscription = new Subscription();
  isRegisterSub: Subscription = new Subscription();

  constructor(private routingService: RoutingServiceService) { }

  ngOnInit() {
    this.isLogin = this.routingService.isLogin;
    this.isRegister = this.routingService.isRegister;

    this.isLoginSub = this.routingService.isLoginSub
      .subscribe(x => this.isLogin = x);

    this.isRegisterSub = this.routingService.isRegisterSub
      .subscribe(x => this.isRegister = x);
  }

  ngOnDestroy() {
    this.isLoginSub.unsubscribe();
    this.isRegisterSub.unsubscribe();
  }

}
