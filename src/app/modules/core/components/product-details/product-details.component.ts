import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.services';
import { switchMap, forkJoin, of, map } from 'rxjs';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService
  ) { }
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['left', ''],
    items: 4,
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
      },
      1200: {
        items: 5
      }
    },
    nav: false
  }

  colorsChoice=['black', 'white', 'blue']
  similarProducts: any[] = []
  mainImg = ''
  category = ''
  productId = ''
  productDetails: any;
  selectedColor='black'
  categoryArray = [
    { name: 'mobiles', items: ["smartphones"] },
    { name: 'groceries', items: ["groceries"] },
    { name: 'homes-and-furnitures', items: ["furniture", "home-decoration"] },
    { name: 'electronics', items: ["laptops", "lighting"] },
    { name: 'fashion', items: ["sunglasses", "womens-jewellery", "womens-bags", "mens-shoes", "mens-shirts", "womens-shoes", "womens-dresses", "tops"] },
    { name: 'travels', items: [] },
    { name: 'beauty-and-more', items: ["womens-watches", "mens-watches", "fragrances", "skincare"] },
    { name: 'appliances', items: ["motorcycle", "automotive"] }
  ]

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(params => {
        this.category = params['category'];
        this.productId = params['productId'];

        const selectedCategory = this.categoryArray.find(cat => cat.name === this.category);
        if (!selectedCategory) return of([])
        const observables = selectedCategory.items.map(item => this.productService.getProductsByCategoryId(item))

        this.productService.getProductById(this.productId).subscribe(product => { console.log(product); this.productDetails = product ;
        this.mainImg=this.productDetails?.thumbnail})

        return forkJoin(observables).pipe(
          map(product => {
            const mergedProducts = product.reduce((acc: any, item: any) => acc.concat(item), []);
            //  suffle randomly array
            for (let i = mergedProducts.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [mergedProducts[i], mergedProducts[j]] = [mergedProducts[j], mergedProducts[i]];
            }
            return mergedProducts;
          })
        )
      })
    )
      .subscribe(val => {
        console.log(val)
        this.similarProducts = val;
      })
  }

   calculateOriginalPrice(discountedPrice:number, discountPercentage:number) {
    // Ensure that the discount percentage is a valid number
    // if (typeof discountedPrice !== 'number' || typeof discountPercentage !== 'number') {
    //   return 'Invalid input. Please provide valid numbers.';
    // }
  
    // Calculate the original price using the formula: originalPrice = discountedPrice / (1 - discountPercentage / 100)
    const originalPrice = discountedPrice / (1 - discountPercentage / 100);
  
    return originalPrice;
  }

}
