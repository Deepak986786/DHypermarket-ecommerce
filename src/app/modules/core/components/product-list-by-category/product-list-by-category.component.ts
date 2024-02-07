import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, forkJoin, map, of, switchMap } from 'rxjs';
import { ProductService } from '../../services/product.services';

@Component({
  selector: 'product-list-by-category',
  templateUrl: './product-list-by-category.component.html',
  styleUrls: ['./product-list-by-category.component.scss']
})
export class ProductListByCategoryComponent implements OnInit {

  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  mainImg = ""

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

  category = ''
  ngOnInit(): void {
    this.activateRoute.params.pipe(
      switchMap(params => {
        this.category = params["category"]

        const selectedCategory = this.categoryArray.find(cat => cat.name === this.category);
        if (!selectedCategory) return of([]);

        const observables = selectedCategory.items.map(item => this.productService.getProductsByCategoryId(item))
        return forkJoin(observables).pipe(
          //for returning the values by categorized format
          map(responses => {
            const result: any = {}
            selectedCategory.items.forEach((item, index) => {
              result[item] = responses[index];
            });
            return result;
          })
        );
      })
    ).subscribe((val: any) => {
      console.log(val)
      //   this below code is for merging array of arrays in one arrays
      // const mergedData = val.reduce((acc: any, current: any) => acc.concat(current), []);
      // console.log(mergedData);

    },
      (error) => {
        console.log(error)
      })



  }

  calculateOriginalPrice(discountedPrice: number, discountPercentage: number) {
    // Ensure that the discount percentage is a valid number
    // if (typeof discountedPrice !== 'number' || typeof discountPercentage !== 'number') {
    //   return 'Invalid input. Please provide valid numbers.';
    // }

    // Calculate the original price using the formula: originalPrice = discountedPrice / (1 - discountPercentage / 100)
    const originalPrice = discountedPrice / (1 - discountPercentage / 100);

    return originalPrice;
  }

}
