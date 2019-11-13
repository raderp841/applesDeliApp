import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Location } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginRegisterComponent } from './components/user/login-register/login-register.component';
import { HomeComponent } from './components/home/home.component';
import { StoresComponent } from './components/dashboard/stores/stores.component';
import { OrdersComponent } from './components/dashboard/orders/orders.component';
import { OrderFormComponent } from './components/dashboard/order-form/order-form.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { OrderDetailComponent } from './components/dashboard/order-detail/order-detail.component';
import { OrderComponent } from './components/dashboard/order/order.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserComponent } from './components/user/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    LoginRegisterComponent,
    HomeComponent,
    StoresComponent,
    OrdersComponent,
    OrderFormComponent,
    DashboardComponent,
    OrderDetailComponent,
    OrderComponent,
    UserListComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([])
  ],
  providers: [Location],
  bootstrap: [AppComponent]
})
export class AppModule { }
