import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
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
    isUsers: boolean = false;
    isUserEdit: boolean = false;
    isNewOrder: boolean = false;

    isLoginRegisterSub: Subject<boolean> = new Subject<boolean>();
    isLoginSub: Subject<boolean> = new Subject<boolean>();
    isRegisterSub: Subject<boolean> = new Subject<boolean>();
    isDashBoardSub: Subject<boolean> = new Subject<boolean>();
    isOrderSub: Subject<boolean> = new Subject<boolean>();
    isUsersSub: Subject<boolean> = new Subject<boolean>();
    isUserEditSub: Subject<boolean> = new Subject<boolean>();
    isNewOrderSub: Subject<boolean> = new Subject<boolean>();

    constructor(private location: Location) { }

    setAllToFalse() {
        this.isLoginRegister = false;
        this.isLogin = false;
        this.isRegister = false;
        this.isDashBoard = false;
        this.isOrder = false;
        this.isUsers = false;
        this.isUserEdit = false;
        this.isNewOrder = false;
    }

    nextAllRouting() {
        this.isLoginRegisterSub.next(this.isLoginRegister);
        this.isLoginSub.next(this.isLogin);
        this.isRegisterSub.next(this.isRegister);
        this.isDashBoardSub.next(this.isDashBoard);
        this.isOrderSub.next(this.isOrder);
        this.isUsersSub.next(this.isUsers);
        this.isUserEditSub.next(this.isUserEdit);
        this.isNewOrderSub.next(this.isNewOrder);
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

        this.location.go('/dashboard');
    }

    switchToUsers() {
        this.setAllToFalse();

        this.isUsers = true;

        this.nextAllRouting();

        this.location.go('/users');
    }

    switchToUserEdit() {
        this.setAllToFalse();

        this.isUserEdit = true;

        this.nextAllRouting();

        this.location.go('/users/edit');
    }

    switchToNewOrder() {
        this.setAllToFalse();

        this.isNewOrder = true;

        this.nextAllRouting();

        this.location.go('/newOrder');
    }
}
