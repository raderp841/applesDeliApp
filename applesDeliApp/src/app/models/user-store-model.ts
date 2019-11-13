export class UserStoreModel {
  id: number;
  userId: number;
  storeId: number;

  constructor(id: number, userId: number, storeId: number) {
    this.id = id;
    this.userId = userId;
    this.storeId = storeId;
  }
}
