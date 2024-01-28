import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    url = environment.apiUrl;
    userInfo: any
    constructor(private http: HttpClient) {

    }

    setUserInfo(user: any) {
        this.userInfo = user;
        // this.userInfo.isLoggedIn = true;
    }
    getUserInfo() {
        return this.userInfo
    }

    getAllUser() {
        return this.http.get(this.url + 'User/getAllusers');
    }
    getUserById(id: string) {
        return this.http.get(this.url + 'User/getUserById?id=' + id);
    }
    createUser(data: any) {
        return this.http.post(this.url + 'User/createUser', data);
    }
    updateUser(data: any) {
        return this.http.put(this.url + 'User/updateUser', data);
    }
    deleteUser(id: string) {
        return this.http.delete(this.url + 'User/id=' + id);
    }
    userLogin(data: any) {
        return this.http.post(this.url + 'User/login', data);
    }
}