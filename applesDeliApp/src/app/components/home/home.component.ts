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
    isUsers: boolean = false;
    isUserEdit: boolean = false;
    isNewOrder: boolean = false;

    isLoginRegisterSub: Subscription = new Subscription();
    isDashboardSub: Subscription = new Subscription();
    isOrderSub: Subscription = new Subscription();
    isUsersSub: Subscription = new Subscription();
    isUserEditSub: Subscription = new Subscription();
    isNewOrderSub: Subscription = new Subscription();

    constructor(private routingService: RoutingServiceService) { }

    ngOnInit() {
        this.isLoginRegister = this.routingService.isLoginRegister;
        this.isLoginRegisterSub = this.routingService.isLoginRegisterSub
            .subscribe(x => this.isLoginRegister = x);
        this.isDashboardSub = this.routingService.isDashBoardSub
            .subscribe(x => this.isDashboard = x);
        this.isOrderSub = this.routingService.isOrderSub
            .subscribe(x => this.isOrder = x);
        this.isUsersSub = this.routingService.isUsersSub
            .subscribe(x => this.isUsers = x);
        this.isUserEditSub = this.routingService.isUserEditSub
            .subscribe(x => this.isUserEdit = x);
        this.isNewOrderSub = this.routingService.isNewOrderSub
            .subscribe(x => this.isNewOrder = x);
    }

    ngOnDestroy() {
        this.isLoginRegisterSub.unsubscribe();
        this.isDashboardSub.unsubscribe();
        this.isOrderSub.unsubscribe();
        this.isUsersSub.unsubscribe();
        this.isUserEditSub.unsubscribe();
        this.isNewOrderSub.unsubscribe();
    }

}
