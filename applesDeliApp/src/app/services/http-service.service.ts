import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user-model';

@Injectable({
    providedIn: 'root'
})
export class HttpServiceService {

    constructor(private http: HttpClient) { }

    loginHttp(username: string, password: string) {
        return this.http.get<UserModel>('https://localhost:44308/api/users/' + username + '/' + password + '/');
    }
}
