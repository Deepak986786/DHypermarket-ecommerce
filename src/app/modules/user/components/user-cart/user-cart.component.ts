import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/modules/core/services/product.services';
import { UserSharedService } from '../../services/userShared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss']
})
export class UserCartComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private userService: UserSharedService,
    private router: Router
  ) { }
  cartItems: any[] = []

  ngOnInit(): void {
    this.userService.userInfo$.subscribe(data => {
      if (data) {
        if (!data?.isLoggedIn) {
          // console.log(data);
          //  this.router.navigate(['/user'])
        }
      } else {
        this.userService.redirectUrl = 'user/cart'
        this.router.navigate(['/user'])
      }

    })

    this.cartItems = this.productService.getCartItems();
    console.log(this.cartItems);

  }

}
