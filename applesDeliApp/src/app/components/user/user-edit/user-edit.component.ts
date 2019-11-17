import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserServiceService } from '../../../services/user-service.service';
import { UserModel } from '../../../models/user-model';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StoreServiceService } from '../../../services/store-service.service';
import { StoreModel } from '../../../models/store-model';
import { format } from 'util';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit, OnDestroy {

  user: UserModel = null;
  stores: StoreModel[] = [];

  userSub: Subscription = new Subscription();
  storesSub: Subscription = new Subscription();

  userEditForm: FormGroup;
  isEditMode: boolean = false;

  constructor(private userService: UserServiceService, private storesService: StoreServiceService) { }

  ngOnInit() {
    this.user = this.userService.editUser;
    this.storesService.getStoresForUserEdit(this.user.id);
    this.stores = this.storesService.storesForEdit;
    
    this.storesSub = this.storesService.storesForEditSub
      .subscribe(s => this.stores = s);

    this.userSub = this.userService.editUserSub
      .subscribe(u => this.user = u);
    this.setupForm();
    this.disableForm();

  }

  setupForm() {
    this.userEditForm = new FormGroup({
      'firstname': new FormControl(this.user.firstName, [Validators.required]),
      'lastname': new FormControl(this.user.lastName, [Validators.required]),
      'username': new FormControl(this.user.userName, [Validators.required]),
      'securitylevel': new FormControl(this.user.securityLevel, [Validators.required]),
      'sheffieldlake': new FormControl(this.stores.some(s => s.id == 1)),
    });
  }

  onSubmit() {
    console.log(this.userEditForm);
  }

  onAllowEdit() {
    this.enableForm();
    this.isEditMode = true;
  }

  onCancelEdit() {
    this.disableForm();
    this.isEditMode = false;
  }

  disableForm() {
    setTimeout(() => this.userEditForm.disable(), 0);
  }

  enableForm() {
    setTimeout(() => this.userEditForm.enable(), 0);
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
