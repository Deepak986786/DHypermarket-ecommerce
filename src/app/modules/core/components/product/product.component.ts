
import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.services';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  constructor(private productService:ProductService) { }

  @Input() productInfo: any;
  @Input() category: any;
  discount = this.generateRandomPercenatagebetween30to80();
  addCartBtnText = 'Add to Cart';
  ngOnInit(): void {
  }

  calculateOriginalPrice(discountedPrice: number, discountPercentage: number) {
    // Ensure that the discount percentage is a valid number
    // if (typeof discountedPrice !== 'number' || typeof discountPercentage !== 'number') {
    //   return 'Invalid input. Please provide valid numbers.';
    // }
    // Calculate the original price using the formula: originalPrice = discountedPrice / (1 - discountPercentage / 100)
    const originalPrice = discountedPrice / (1 - discountPercentage / 100);
    return Math.floor(originalPrice * 100) / 100;
  }
  generateRandomPercenatagebetween30to80() {
    // Generate a random number between 0 and 1
    const randomNumber = Math.random();
    // Scale the random number to the desired range (30 to 80)
    const min = 30;
    const max = 80;
    const randomPercentage = min + Math.floor(randomNumber * (max - min + 1));
    return randomPercentage;
  }

  addToCart(event:any) {
    let isAdded = this.productService.addToCart(this.productInfo);
      isAdded ? this.addCartBtnText = 'Added ✅' : this.addCartBtnText ='Add to Cart'
      event.stopPropagation();
  }

}
