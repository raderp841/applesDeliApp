import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RoutingServiceService {
  isLoginRegister: boolean = true;
  isLogin: boolean = true;
  isRegister: boolean = false;
  isDashBoard: boolean = false;
  isOrder: boolean = false;

  isLoginRegisterSub: Subject<boolean> = new Subject<boolean>();
  isLoginSub: Subject<boolean> = new Subject<boolean>();
  isRegisterSub: Subject<boolean> = new Subject<boolean>();
  isDashBoardSub: Subject<boolean> = new Subject<boolean>();
  isOrderSub: Subject<boolean> = new Subject<boolean>();

  constructor(private location: Location) { }

  setAllToFalse() {
    this.isLoginRegister = false;
    this.isLogin = false;
    this.isRegister = false;
    this.isDashBoard = false;
    this.isOrder = false;
  }

  nextAllRouting() {
    this.isLoginRegisterSub.next(this.isLoginRegister);
    this.isLoginSub.next(this.isLogin);
    this.isRegisterSub.next(this.isRegister);
    this.isDashBoardSub.next(this.isDashBoard);
    this.isOrderSub.next(this.isOrder);
  }

  switchToOrder() {
    this.setAllToFalse();

    this.isOrder = true;

    this.nextAllRouting();

    this.location.go("/orders");
  }

  switchToLogin() {
    this.setAllToFalse();

    this.isLoginRegister = true;
    this.isLogin = true;

    this.nextAllRouting();

    this.location.go("/login");
  }

  switchToRegister() {
    this.setAllToFalse();

    this.isLoginRegister = true;
    this.isRegister = true;

    this.nextAllRouting();

    this.location.go("/register");
  }

  switchToDashboard() {
    this.setAllToFalse();

    this.isDashBoard = true;

    this.nextAllRouting();

    this.location.go('/dashboard')
  }

}
