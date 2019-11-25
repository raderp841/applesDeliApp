
export class OrdersModel {
  id: number;
  userId: number;
  storeId: number;
  orderedDate: Date;
  pickupDate: Date;
  orderedTime: string;
  pickupTime: string;
  nameForPickup: string;
  phoneNumber: string;
  chickenPcs: number;
  jojoPcs: number;
  details: string;
  isActive: boolean;
  isCancelled: boolean;
  isCompleted: boolean;

    constructor(id: number,
        userId: number,
        storeId: number,
        orderedDate: Date,
        pickupDate: Date,
        orderedTime: string,
        pickupTime: string,
        nameForPickup: string,
        phoneNumber: string,
        chickenPcs: number,
        jojoPcs: number,
        details: string,
        isActive: boolean,
        isCancelled: boolean,
        isCompleted: boolean) {
    this.id = id;
    this.userId = userId;
    this.storeId = storeId;
    this.orderedDate = orderedDate;
    this.pickupDate = pickupDate;
    this.orderedTime = orderedTime;
    this.pickupTime = pickupTime;
    this.nameForPickup = nameForPickup;
    this.phoneNumber = phoneNumber;
    this.chickenPcs = chickenPcs;
    this.jojoPcs = jojoPcs;
    this.details = details;
    this.isActive = isActive;
    this.isCancelled = isCancelled;
    this.isCompleted = isCompleted;
  }
}
