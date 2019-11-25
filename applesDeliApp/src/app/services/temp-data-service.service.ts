import { Injectable } from '@angular/core';
import { UserModel } from '../models/user-model';
import { TokenModel } from '../models/token-model';
import { StoreModel } from '../models/store-model';
import { OrdersModel } from '../models/orders-model';
import { UserServiceService } from './user-service.service';
import { UserStoreModel } from '../models/user-store-model';
import { UserEditModel } from '../models/user-edit-model';

@Injectable({
    providedIn: 'root'
})
export class TempDataServiceService {

    tempToken1: TokenModel = new TokenModel(1, 1, 'vienj342fjvma', '11/11/2019', new Date('11/15/19'));
    tempToken2: TokenModel = new TokenModel(2, 2, 'bja4je3jff8ja', '11/11/2019', new Date('11/15/19'));
    tempToken3: TokenModel = new TokenModel(3, 3, 'bkmkmvf,ldc44', '11/11/2019', new Date('11/15/19'));
    tempToken4: TokenModel = new TokenModel(4, 4, 'rie3jff323jgj', '11/11/2019', new Date('11/15/19'));
    tempToken5: TokenModel = new TokenModel(5, 5, '49j4jvmdfn3n2', '11/11/2019', new Date('11/15/19'));
    tempToken6: TokenModel = new TokenModel(6, 6, '5ng34ig4o4o43', '11/11/2019', new Date('11/15/19'));
    tempToken7: TokenModel = new TokenModel(7, 7, '2j3jt4jgngng2', '11/11/2019', new Date('11/15/19'));

    tempTokes: TokenModel[] = [
        this.tempToken1,
        this.tempToken2,
        this.tempToken3,
        this.tempToken4,
        this.tempToken5,
        this.tempToken6,
        this.tempToken7
    ];
    // -1 - guest user
    //  0 - logged in customer
    //  3 - worker
    //  5 - deli manager/Supervisor
    //  7 - store manager
    //  9 - owner/me
    tempUsers: UserModel[] = [
        new UserModel(1, 'Peter', 'Rader', 'Raderp', 'Test123!', this.tempToken1, 9),
        new UserModel(2, 'Bill', 'Logar', 'BillL', 'Test123!', this.tempToken2, 7),
        new UserModel(3, 'Steve', 'Kr', 'SteveK', 'Test123!', this.tempToken3, 9),
        new UserModel(4, 'Deli', 'Worker', 'DeliW', 'Test123!', this.tempToken4, 3),
        new UserModel(5, 'Deli', 'Manager', 'DeliM', 'Test123!', this.tempToken5, 5),
        new UserModel(6, 'Store', 'Supervisor', 'StoreS', 'Test123!', this.tempToken6, 5),
        new UserModel(7, 'Store', 'Manager', 'StoreM', 'Test123!', this.tempToken7, 7),

    ];

    stores: StoreModel[] = [
        new StoreModel(1, 'Sheffield Lake Apples', '4100 Ivanhoe Ave', 'Sheffield Lake', 'Ohio', 44054, '440-949-6108'),
        new StoreModel(2, 'Elyria Apples', '230 N Abbe Rd', 'Elyria', 'Ohio', 44035, '440-365-4687'),
        new StoreModel(3, 'Lorain Apples', '1051 Meister Rd', 'Lorain', 'Ohio', 44052, '440-282-4471'),
        new StoreModel(4, 'Village Market', '816 N Main St', 'Wellington', 'Ohio', 44090, '440-647-2169'),
    ];

    tempDate = new Date('11/11/19');
    orders: OrdersModel[] = [
        new OrdersModel(1, -1, 1,  this.tempDate, new Date('11/12/2019'), '2330', '1400', 'Jason', '333-123-1234', 12, 2, 'Dark', true, false, false),
        new OrdersModel(2, -1, 1,  this.tempDate, new Date('11/11/2019'), '2200', '1600', 'Fran', '333-123-1234', 2, 4, 'Dark', false, false, true),
        new OrdersModel(3, -1, 1,  this.tempDate, new Date('11/15/2019'), '0930', '1700', 'Toby', '333-123-1234', 20, 20, 'Dark', false, true, false),
        new OrdersModel(4, -1, 1,  this.tempDate, new Date('11/19/2019'), '2330', '1400', 'Daymon', '333-123-1234', 0, 10, 'Dark', true, false, false),
        new OrdersModel(5, -1, 2,  this.tempDate, new Date('11/12/2019'), '2330', '1400', 'Billy', '333-123-1234', 12, 2, 'Dark', true, false, false),
        new OrdersModel(6, -1, 2,  this.tempDate, new Date('11/11/2019'), '2200', '1600', 'Ira', '333-123-1234', 2, 4, 'Dark', false, false, true),
        new OrdersModel(7, -1, 2,  this.tempDate, new Date('11/15/2019'), '0930', '1700', 'Thomas', '333-123-1234', 20, 20, 'Dark', false, true, false),
        new OrdersModel(8, -1, 2,  this.tempDate, new Date('11/19/2019'), '2330', '1400', 'Franklin', '333-123-1234', 0, 10, 'Dark', true, false, false),
        new OrdersModel(9, -1, 3,  this.tempDate, new Date('11/12/2019'), '2330', '1400', 'Ugene', '333-123-1234', 12, 2, 'Dark', true, false, false),
        new OrdersModel(10, -1, 3, this.tempDate, new Date('11/11/2019'), '2200', '1600', 'Jan', '333-123-1234', 2, 4, 'Dark', false, false, true),
        new OrdersModel(11, -1, 3, this.tempDate, new Date('11/15/2019'), '0930', '1700', 'Barbra', '333-123-1234', 20, 20, 'Dark', false, true, false),
        new OrdersModel(12, -1, 3, this.tempDate, new Date('11/19/2019'), '2330', '1400', 'Cathy', '333-123-1234', 0, 10, 'Dark', true, false, false),
        new OrdersModel(13, -1, 4, this.tempDate, new Date('11/12/2019'), '2330', '1400', 'Tre', '333-123-1234', 12, 2, 'Dark', true, false, false),
        new OrdersModel(14, -1, 4, this.tempDate, new Date('11/11/2019'), '2200', '1600', 'Olivia', '333-123-1234', 2, 4, 'Dark', false, false, true),
        new OrdersModel(15, -1, 4, this.tempDate, new Date('11/15/2019'), '0930', '1700', 'Nathan', '333-123-1234', 20, 20, 'Dark', false, true, false),
        new OrdersModel(16, -1, 4, this.tempDate, new Date('11/19/2019'), '2330', '1400', 'Charles', '333-123-1234', 0, 10, 'Dark', true, false, false),
    ];

    userStores: UserStoreModel[] = [
        new UserStoreModel(1, 1, 1),
        new UserStoreModel(2, 1, 2),
        new UserStoreModel(3, 1, 3),
        new UserStoreModel(4, 1, 4),
        new UserStoreModel(5, 2, 4),
        new UserStoreModel(6, 3, 1),
        new UserStoreModel(7, 3, 2),
        new UserStoreModel(8, 3, 3),
        new UserStoreModel(9, 3, 4),
        new UserStoreModel(10, 4, 2),
        new UserStoreModel(11, 5, 5),
        new UserStoreModel(12, 6, 1),
        new UserStoreModel(13, 7, 2),
    ];

    constructor() { }

    getUserByUsernamePassword(username: string, password: string) {
        let user = this.tempUsers.filter(function (x) {
            if (x.userName == username && x.password == password) {
                return x;
            }
        });
        if (user.length == 1) {
            return user[0];
        }
        return null;
    }

    getStoresForUser(token: TokenModel) {
        let user = this.getUserByToken(token);
        let ust = this.getUserStoresByUserId(user.id);
        let stores: StoreModel[] = [];
        for (let i = 0; i < ust.length; i++) {
            for (let j = 0; j < this.stores.length; j++) {
                if (this.stores[j].id == ust[i].storeId) {
                    stores.push(this.stores[j]);
                }
            }
        }
        return stores.slice();
    }

    getUserByToken(token: TokenModel) {

        let user: UserModel = this.tempUsers.find(u => u.id == token.userId);
        return user;
    }

    getUserStoresByUserId(userId: number) {
        let ust: UserStoreModel[] = this.userStores.filter(us => us.userId == userId);
        return ust.slice();
    }

    getStoresByUserId(userId: number) {
        let ust: UserStoreModel[] = this.getUserStoresByUserId(userId);
        let storeIds: number[] = [];
        ust.forEach(u => storeIds.push(u.storeId));
        let stores: StoreModel[] = [];
        storeIds.forEach(si => this.stores.forEach(function (s) { if (s.id == si) stores.push(s); }));
        return stores;
    }

    getUserStoresIdByStoreId(storeId: number) {
        let ust: UserStoreModel[] = this.userStores.filter(us => us.storeId == storeId);
        return ust.slice();
    }

    getOrdersForStore(storeId: number) {
        let orders: OrdersModel[] = this.orders.filter(o => o.storeId == storeId).slice();
        return orders;
    }

    updateOrder(order: OrdersModel) {
        console.log(this.orders);
    }

    getUsersForUser(token: TokenModel) {
        let users: UserModel[] = this.tempUsers;

        return users;
    }

    getAddStores() {
        return this.stores.slice();
    }

    updateUser(userEditModel: UserEditModel) {
        console.log(userEditModel.userStoreModels);
        let ust = this.getUserStoresByUserId(userEditModel.userModel.id);
        ust.forEach(u => {
            let index = this.userStores.indexOf(u);
            this.userStores.splice(index, 1);
        });
        this.userStores = this.userStores.concat(userEditModel.userStoreModels);
        this.tempUsers.filter(x => x.id == userEditModel.userModel.id)[0] = userEditModel.userModel;
        return this.tempUsers.filter(x => x.id == userEditModel.userModel.id)[0];
    }

    saveNewOrder(order: OrdersModel) {
        this.orders.push(order);
        return true;
    }
}
