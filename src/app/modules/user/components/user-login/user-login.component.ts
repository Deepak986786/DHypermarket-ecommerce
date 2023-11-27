import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(private router: Router,private userService: UserService) { }

  username: string = '';
  password: string = '';
  showSpinner: boolean = false;

  ngOnInit() {
  }

  login(): void {
    this.showSpinner = true;
    let data = { email: this.username, password: this.password }
    this.userService.userLogin(data).subscribe(data=>{
      console.log(data);
      
    })
    // if (this.username == 'admin' && this.password == 'admin') {

    //   this.router.navigate(["user"]);
    // } else {
    //   alert("Invalid credentials");
    // }
  }
}


