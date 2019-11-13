import { TokenModel } from './token-model';

export class UserModel {
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  token: TokenModel;
  securityLevel: number;

  constructor(id: number = -1, firstName: string = 'GuestUser', lastName: string = 'GuestUser', userName: string = 'GuestUser', password: string = 'GuestUser', token: TokenModel, securityLevel: number = -1) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.password = password;
    this.token = token;
    this.securityLevel = securityLevel;
  }
}
