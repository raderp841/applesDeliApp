import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserServiceService } from '../../../services/user-service.service';
import { UserModel } from '../../../models/user-model';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StoreServiceService } from '../../../services/store-service.service';
import { StoreModel } from '../../../models/store-model';
import { format } from 'util';
import { element } from 'protractor';
import { UserStoreModel } from '../../../models/user-store-model';
import { UserEditModel } from '../../../models/user-edit-model';

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
      'elyria': new FormControl(this.stores.some(s => s.id == 2)),
      'lorain': new FormControl(this.stores.some(s => s.id == 3)),
      'villagemarket': new FormControl(this.stores.some(s => s.id == 4)),
    });
  }

  onSubmit() {
    let ust: UserStoreModel[] = [];
    
    if (this.userEditForm.controls['sheffieldlake'].value == true) {
      ust.push(new UserStoreModel(-1, this.user.id, 1));
    }
    if (this.userEditForm.controls['elyria'].value) {
      ust.push(new UserStoreModel(-1, this.user.id, 2));
    }
    if (this.userEditForm.controls['lorain'].value) {
      ust.push(new UserStoreModel(-1, this.user.id, 3));
    }
    if (this.userEditForm.controls['villagemarket'].value) {
      ust.push(new UserStoreModel(-1, this.user.id, 4));
    }
    this.setUserFromForm();
    let userEditModel: UserEditModel = new UserEditModel(this.user, ust);
    this.userService.userEdit(userEditModel);
    this.storesService.getStoresForUserEdit(this.user.id);
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

  setUserFromForm() {
    this.user.firstName = this.userEditForm.controls['firstname'].value;
    this.user.lastName = this.userEditForm.controls['lastname'].value;
    this.user.securityLevel = this.userEditForm.controls['securitylevel'].value;
    this.user.userName = this.userEditForm.controls['username'].value;
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
    this.storesSub.unsubscribe();
  }

}
