import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { OrdersModel } from '../../../models/orders-model';
import { Subscription } from 'rxjs';
import { OrderServiceService } from '../../../services/order-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StoreModel } from '../../../models/store-model';
import { StoreServiceService } from '../../../services/store-service.service';
import { RoutingServiceService } from '../../../services/routing-service.service';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, OnDestroy {
    order: OrdersModel = this.orderService.currentOrder;
    stores: StoreModel[] = [];
    orderSub: Subscription = new Subscription();
    orderForm: FormGroup;

    constructor(private orderService: OrderServiceService, private storeService: StoreServiceService, private routingService: RoutingServiceService) { }

    ngOnInit() {
        this.orderSub = this.orderService.currentOrderSub
            .subscribe(o => this.order = o);
        this.stores = this.storeService.getAllStores();

        this.setUpOrderForm();
    }

    setUpOrderForm() {
        this.orderForm = new FormGroup({
            'storeid': new FormControl(this.order.storeId, [Validators.required]),
            'ordereddate': new FormControl(this.order.orderedDate, [Validators.required]),
            'pickupdate': new FormControl(this.order.pickupDate, [Validators.required]),
            'orderedtime': new FormControl(this.convertTime(this.order.orderedTime), [Validators.required]),
            'pickuptime': new FormControl(this.convertTime(this.order.pickupTime), [Validators.required]),
            'nameforpickup': new FormControl(this.order.nameForPickup, [Validators.required]),
            'phonenumber': new FormControl(this.order.phoneNumber, [Validators.required]),
            'chickenpcs': new FormControl(this.order.chickenPcs, [Validators.required]),
            'jojopcs': new FormControl(this.order.jojoPcs, [Validators.required]),
            'details': new FormControl(this.order.details, [Validators.required]),
            'isactive': new FormControl(this.order.isActive, [Validators.required]),
            'iscancelled': new FormControl(this.order.isCancelled, [Validators.required]),
            'iscompleted': new FormControl(this.order.isCompleted, [Validators.required]),
        });
        this.orderForm.disable();
        //id: number;
        //userId: number;
        //storeId: number;
        //orderedDate: string;
        //pickupDate: string;
        //orderedTime: string;
        //pickupTime: string;
        //nameForPickup: string;
        //phoneNumber: string;
        //chickenPcs: number;
        //jojoPcs: number;
        //details: string;
        //isActive: boolean;
        //isCancelled: boolean;
        //isCompleted: boolean;
    }

    convertTime(time: string) {
        let isAM: boolean = false;
        let newTime: string = '';
        let hours: string = '';
        let hoursNumber: number = parseInt(time[0] + time[1]);
        let minutes: string = (time[2] + time[3]);
        if (hoursNumber < 12) {
            isAM = true;
        }
        if (hoursNumber > 12) {
            hoursNumber -= 12;
        }
        hours = hoursNumber.toString();

        newTime = (hours + ':' + minutes);
        if (isAM) {
            newTime += ' AM';
        }
        else {
            newTime += ' PM';
        }
        return newTime;
    }

    enableEdit() {
        this.orderForm.enable();
    }

    editForm() {
        console.log('save');
        this.order.chickenPcs = this.orderForm.controls['chickenpcs'].value;
        this.order.details = this.orderForm.controls['details'].value;
        this.order.isActive = this.orderForm.controls['isactive'].value;
        this.order.isCancelled = this.orderForm.controls['iscancelled'].value;
        this.order.isCompleted = this.orderForm.controls['iscompleted'].value;
        this.order.jojoPcs = this.orderForm.controls['jojopcs'].value;
        this.order.nameForPickup = this.orderForm.controls['nameforpickup'].value;
        this.order.orderedDate = this.orderForm.controls['ordereddate'].value;
        this.order.orderedTime = this.orderForm.controls['orderedtime'].value;
        this.order.phoneNumber = this.orderForm.controls['phonenumber'].value;
        this.order.pickupDate = this.orderForm.controls['pickupdate'].value;
        this.order.pickupTime = this.orderForm.controls['pickuptime'].value;
        this.order.storeId = this.orderForm.controls['storeid'].value;

        this.orderService.setOrder(this.order);
        this.disableEdit();
    }

    disableEdit() {
        this.setUpOrderForm();
        setTimeout(() => this.orderForm.disable());
    }

    onSwitchToNewOrder() {
        this.routingService.switchToNewOrder();
    }

    ngOnDestroy() {
        this.orderSub.unsubscribe();
    }

}
