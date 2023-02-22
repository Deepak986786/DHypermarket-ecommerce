import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData, signUp } from 'src/app/modules/models/data-model';
import { SellerService } from '../../services/seller.service';

@Component({
  selector: 'seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller:SellerService , private router:Router) { }

  ngOnInit(): void {
    this.seller.reloadSeller();
  }
 user :any;

   signupshow=true;
   loginshow=false;

   showlogin(){
    this.signupshow=false;
   this.loginshow=true;
   }

   showsignup(){
    this.signupshow=true;
    this.loginshow=false;
   }
  
  sign(data:signUp){
    // console.log(data);
    console.log(this.seller.isLoggedIn);
    this.seller.userSignUp(data);

    console.log(this.seller.isLoggedIn);
    
  }

  login(data:LoginData){
    console.log("login", data);
     this.seller.login(data);

  }

}
