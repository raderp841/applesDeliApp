export class TokenModel {
  id: number;
  userId: number;
  token: string;
  dateCreated: string;
  dateExpired: string;

  constructor(id: number = -1, userId: number, token: string, dateCreated: string, dateExp: string) {
    this.id = id;
    this.userId = userId;
    this.token = token;
    this.dateCreated = dateCreated;
    this.dateExpired = dateExp;
  }
}
