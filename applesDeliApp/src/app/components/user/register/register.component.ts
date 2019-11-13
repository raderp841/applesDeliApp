import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RoutingServiceService } from '../../../services/routing-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  isEmailMatch: boolean = true;
  isPassMatch: boolean = true;

  constructor(private routingService: RoutingServiceService) { }

  ngOnInit() {
    this.setupRegisterForm();
  }

  onRegister() {
    console.log(this.registerForm.value);
  }

  setupRegisterForm() {
    this.registerForm = new FormGroup({
      'firstname': new FormControl('', [Validators.required]),
      'lastname': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required]),
      'emailcheck': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required]),
      'passwordcheck': new FormControl('', [Validators.required])
    });
  }

  onCheckEmailMatch() {
    this.isEmailMatch = (this.registerForm.controls['email'].value == this.registerForm.controls['emailcheck'].value);
  }

  onCheckPasswordMatch() {
    this.isPassMatch = (this.registerForm.controls['password'].value == this.registerForm.controls['passwordcheck'].value);
    console.log(this.isPassMatch);
  }

  onSwitchToLogin() {
    this.routingService.switchToLogin();
  }

}
