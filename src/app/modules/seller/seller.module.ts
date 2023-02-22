import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerAuthComponent } from './components/seller-auth/seller-auth.component';
import { FormsModule } from '@angular/forms';
import { SellerHomeComponent } from './components/seller-home/seller-home.component';
import { SellerAddProductComponent } from './components/seller-add-product/seller-add-product.component';



@NgModule({
  declarations: [
    SellerAuthComponent,
    SellerHomeComponent,
    SellerAddProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SellerModule { }
