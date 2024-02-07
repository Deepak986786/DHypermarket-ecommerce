import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sellerType } from 'src/app/modules/models/data-model';
import { UserSharedService } from 'src/app/modules/user/services/userShared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private userSharedService: UserSharedService) {
  }

  menutype = "default";
  switchtype = 'notLoggedIn';
  user: any;
  userName: string = ""
  ngOnInit(): void {
    this.userSharedService.userInfo$.subscribe(data => {
      if(data){
        this.user = data;
        // this.user!.isLoggedIn = true;
        console.log(data);
        
      }  
      if (this.user?.isLoggedIn) {
        this.userName = this.user.name;
        this.switchtype = 'loggedIn';
      }
    })
  }

  logout() {
    localStorage.removeItem("seller");
    this.router.navigate(['seller']);
  }

}
