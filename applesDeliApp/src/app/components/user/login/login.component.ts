import { Component, OnInit } from '@angular/core';
import { RoutingServiceService } from '../../../services/routing-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginRegisterServiceService } from '../../../services/login-register-service.service';

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
    this.setupLoginForm();
  }

  onSwitchToRegiter() {
    this.routingService.switchToRegister();
  }

  loginSubmit() {
    this.isLoginSuccess = this.loginService.login(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value);
    if (this.isLoginSuccess) {
      this.routingService.switchToDashboard();
    }
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
