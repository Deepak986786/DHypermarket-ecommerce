import { Component, OnInit } from '@angular/core';
import { productType } from 'src/app/modules/models/data-model';
import { SellerService } from '../../services/seller.service';

@Component({
  selector: 'seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.scss']
})
export class SellerAddProductComponent implements OnInit {

  constructor(private seller:SellerService) { }

  ngOnInit(): void {
  }

  addProductMsg="";

   addProduct(formData:productType){
    console.log(formData);
    this.seller.addProduct(formData).subscribe((result:any)=>{
      console.log(result);
      if(result){
        this.addProductMsg="added Successfully! :) "
      }
    });
    
    setTimeout(()=>{
        this.addProductMsg=''
    },2500)
   }
}
