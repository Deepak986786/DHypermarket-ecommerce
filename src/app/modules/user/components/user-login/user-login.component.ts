import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserSharedService } from '../../services/userShared.service';

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(private router: Router, private userSharedService: UserSharedService,
    private userService: UserService
  ) { }

  username: string = '';
  password: string = '';
  showSpinner: boolean = false;

  ngOnInit() {
    // debugger;
    let loggedInUser = localStorage.getItem('dhypermarketuser');
    if (loggedInUser) {
      let parsedUser = JSON.parse(loggedInUser);
      if (parsedUser && parsedUser.isLoggedIn) {
        this.userSharedService.setUserInfo(parsedUser)
        let redirectURL = this.userSharedService.redirectUrl || '/';
        this.router.navigateByUrl(redirectURL);
      }
    }
  }

  login(): void {
    this.showSpinner = true;
    let data = { email: this.username, password: this.password }
    this.userService.userLogin(data).subscribe(data => {
      // console.log(data);
      this.userSharedService.setUserInfo(data);
      localStorage.setItem('dhypermarketuser', JSON.stringify(data));
      // console.log(data);
      if (data) {
        let redirectURL = this.userSharedService.redirectUrl || '/';
        this.router.navigateByUrl(redirectURL);
      }
    })
    // if (this.username == 'admin' && this.password == 'admin') {

    //   this.router.navigate(["user"]);
    // } else {
    //   alert("Invalid credentials");
    // }
  }
}


