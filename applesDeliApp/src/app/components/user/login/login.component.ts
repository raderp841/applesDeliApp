import { Component, OnInit } from '@angular/core';
import { RoutingServiceService } from '../../../services/routing-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginRegisterServiceService } from '../../../services/login-register-service.service';
import { TokenModel } from '../../../models/token-model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    isLoginSuccess: boolean = true;

    constructor(private routingService: RoutingServiceService, private loginService: LoginRegisterServiceService) { }

    ngOnInit() {
        
        let token: TokenModel = JSON.parse(localStorage.getItem('token'));
        console.log(token);
        if (token === null) {
            this.setupLoginForm();
        }
        else {
            if (this.loginService.loginToken(token)) {
                this.routingService.switchToDashboard();
            }
        }
        
    }

    onSwitchToRegiter() {
        this.routingService.switchToRegister();
    }

    loginSubmit() {
        this.loginService.login(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value)
            .subscribe(u => {
                console.log(u);
                this.loginService.setUser(u);
                this.routingService.switchToDashboard();
            });
    }

    onDevLogin() {
        if (this.loginService.login('Raderp', 'Test123!')) {
            this.routingService.switchToDashboard();
        }
    }

    setupLoginForm() {
        this.loginForm = new FormGroup({
            'username': new FormControl('', Validators.required),
            'password': new FormControl('', Validators.required)
        });
    }

    onDateTest() {
        console.log(Date.now());
        console.log(new Date('11/14/2019'));
        console.log(new Date());
        console.log(Date.now().toString());
    }

    
}
