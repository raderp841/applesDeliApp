import { Component, OnInit, OnDestroy } from '@angular/core';
import { RoutingServiceService } from '../../services/routing-service.service';
import { UserServiceService } from '../../services/user-service.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

    constructor(private routingService: RoutingServiceService, private userService: UserServiceService) { }

    ngOnInit() {
    }

    switchToDashboard() {
        if (this.checkLoginStatus()) {
            this.routingService.switchToDashboard();
        }
        else {
            this.routingService.switchToLogin();
        }
    }

    switchToOrders() {
        if (this.checkLoginStatus()) {
            this.routingService.switchToOrder();
        }
        else {
            this.routingService.switchToLogin();
        }
    }

    switchToUsers() {
        if (this.checkLoginStatus()) {
            this.routingService.switchToUsers();
        }
        else {
            this.routingService.switchToLogin();
        }
    }

    checkLoginStatus() {
        if (this.userService.currentUser != null) {
            return true;
        }
        return false;
    }

    logout() {
        localStorage.clear();
        location.reload();
        this.routingService.switchToLogin();

    }

    login() {
        this.routingService.switchToLogin();
    }
    

    ngOnDestroy() {

    }

}
