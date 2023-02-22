import { Component, OnInit } from '@angular/core';
import { productType } from 'src/app/modules/models/data-model';
import { SellerService } from '../../services/seller.service';

@Component({
  selector: 'seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.scss']
})
export class SellerHomeComponent implements OnInit {

  constructor(private seller:SellerService) { }

  products:undefined | productType[];
  
  ngOnInit(): void {
    this.seller.getProductList().subscribe((result:productType[])=>{
       console.log(result);
        if(result && result.length >0){
          this.products = result;
        }
    })
  }

}
