import { UserModel } from './user-model';
import { UserStoreModel } from './user-store-model';

export class UserEditModel {

  userModel: UserModel;
  userStoreModels: UserStoreModel[];

  constructor(userModel: UserModel, userStoreModels: UserStoreModel[]) {
    this.userModel = userModel;
    this.userStoreModels = userStoreModels;
  }
}
