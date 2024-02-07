import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserSharedService {
    userInfo = new BehaviorSubject<any>(null);
    userInfo$ = this.userInfo.asObservable();
    redirectUrl = ''
    setUserInfo(user: any) {
        if (!Object.hasOwnProperty('isLoggedIn')) {
            user.isLoggedIn = true;
        }
        this.userInfo.next(user);
    }
    getUserInfo() {
        return this.userInfo.value;
    }
}