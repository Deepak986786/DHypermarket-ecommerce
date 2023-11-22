import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData, signUp } from 'src/app/modules/models/data-model';
import { SellerService } from '../../services/seller.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent implements OnInit {

  loginForm:FormGroup;
  signupForm:FormGroup;
  constructor(private seller:SellerService , private router:Router,private fb:FormBuilder) {
     this.loginForm = this.fb.group({
      email:[''],
      password: ['']
     });
     this.signupForm = this.fb.group({
      email: [''],
      password: [''],
      fullName: ['']
     })
   }

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
  
  signup(){
    // console.log(data);
    console.log(this.seller.isLoggedIn);
    this.seller.userSignUp(this.signupForm.value);

    console.log(this.seller.isLoggedIn);
    
  }

  login(){
     this.seller.login(this.loginForm.value);
  }

}
