import { Component, OnInit } from '@angular/core';
import * as moment from 'moment-timezone';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SpinnerService } from 'src/app/modules/shared/service/spinner.service';
import { UserService } from 'src/app/modules/user/services/user.service';
import { ProductService } from '../../services/product.services';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService, private spinner: SpinnerService, private productService: ProductService) { }

  startDate = new Date();
  featuredProductList: any;

  date: any;

  ngOnInit(): void {
    this.spinner.showSpinner()
    this.getFeatureProducts();
    this.spinner.stopSpinner()
  }

  customOptions: OwlOptions = {
    loop: true,
    items: 1,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['left', ''],
    autoplay: true,
    // responsive: {
    //   0: {
    //     items: 1
    //   },
    //   400: {
    //     items: 2
    //   },
    //   740: {
    //     items: 3
    //   },
    //   940: {
    //     items: 4
    //   }
    // },
    nav: false
  }
  customOptionsF: OwlOptions = {
    loop: true,
    items: 5,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['left', ''],
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }
  carouselImageList = [
    'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b076c9bff65b2d6e.png?q=20',
    'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/9f2d8a698cd97710.jpg?q=20',
    'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4eed11b0faee9cec.jpg?q=20',
    'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/d5a2a6481656bb58.jpeg?q=20'
  ];

  categoryList = [
    { name: 'Groceries', url: 'https://rukminim1.flixcart.com/flap/92/92/image/29327f40e9c4d26b.png?q=100', link: 'groceries' },
    { name: 'Mobiles', url: 'https://rukminim1.flixcart.com/flap/92/92/image/22fddf3c7da4c4f4.png?q=100', link: 'mobiles' },
    { name: 'Fashion', url: 'https://rukminim1.flixcart.com/fk-p-flap/74/74/image/0d75b34f7d8fbcb3.png?q=100', link: 'fashion' },
    { name: 'Electronics', url: 'https://rukminim1.flixcart.com/flap/74/74/image/69c6589653afdb9a.png?q=100', link: 'electronics' },
    { name: 'Home and Furniture', url: 'https://rukminim1.flixcart.com/flap/74/74/image/ab7e2b022a4587dd.jpg?q=100', link: 'homes-and-furnitures' },
    { name: 'Appliances', url: 'https://rukminim1.flixcart.com/fk-p-flap/74/74/image/0139228b2f7eb413.jpg?q=100', link: 'appliances' },
    { name: 'Travel', url: 'https://rukminim1.flixcart.com/flap/74/74/image/71050627a56b4693.png?q=100', link: 'travels' },
    { name: 'Beauty,Toys & more', url: 'https://rukminim1.flixcart.com/flap/74/74/image/dff3f7adcf3a90c6.png?q=100', link: 'beauty-and-more' },

  ]

  // carauselList = [
  //   { name: '1st', url: 'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b076c9bff65b2d6e.png?q=20' },
  //   { name: '2st', url: 'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/9f2d8a698cd97710.jpg?q=20' },
  //   { name: '3st', url: 'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4eed11b0faee9cec.jpg?q=20' },
  // ]

  formatDate(date: any) {
    console.log("befor = ", date);
    // const utcDate = moment(date).utc();
    const udate = moment.utc(date);

    // Format the date in the desired format
    const formattedDate = udate.format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
    console.log("after - ", formattedDate);
    return formattedDate
  }

  getFeatureProducts() {
    console.log("getting featured products");
    this.productService.getFeaturedProducts(5).subscribe(x => this.featuredProductList = x);
  }
}
