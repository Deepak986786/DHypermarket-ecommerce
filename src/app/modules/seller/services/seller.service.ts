import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { LoginData, productType, signUp } from '../../models/data-model';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
/**
 * this is the route url  for seller 
 * **/
const url="http://localhost:3000/seller";
/**
 * this is the route url  for product 
 * **/
const producturl = "http://localhost:3000/product";

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient , private router:Router) { }
  isLoggedIn  = new BehaviorSubject<boolean>(false);

  userSignUp(data:any) {
    // return this.http.post(url , data).subscribe(result=>{
    //   if (result) {
        localStorage.setItem('seller',JSON.stringify(data));
        this.isLoggedIn.next(true);
        this.router.navigate(['seller/home']);
    //   }
    // })
  }
  /**
   *  this method checks if the seller is logged in on not
   * @returns isLoggedIn behavioral subject 
   * **/
  isSellerLoggedIn(){
    return this.isLoggedIn;
  }

  reloadSeller(){
    if (localStorage.getItem('seller')){
        this.isLoggedIn.next(true);
        console.log(localStorage.getItem('seller'))
        this.router.navigate(['/seller/home']);
    }
  }
 
  login(data:LoginData){
    return this.http.get(url+`?email=${data.email}&password=${data.password}`).subscribe((response:any)=> {
        console.log("response", response);

      if(response && response.length === 1){
        this.isLoggedIn.next(true);
        localStorage.setItem('seller',JSON.stringify(response));
        this.router.navigate(['/seller/home']);
      }
    });
  }
   /**
    * This method log outs the user 
    * Notifies the subscriber via isLoggedIn subject  with false value
    * **/
  logout(){
    localStorage.removeItem('seller');
    this.isLoggedIn.next(false);
  }


  addProduct(data:productType){
    console.log(data);
    return this.http.post(producturl, data);
    
  }

  getProductList(){
    return this.http.get<productType[]>(producturl);
  }

}
