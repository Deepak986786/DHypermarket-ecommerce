import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerAuthComponent } from './components/seller-auth/seller-auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SellerHomeComponent } from './components/seller-home/seller-home.component';
import { SellerAddProductComponent } from './components/seller-add-product/seller-add-product.component';
import { MaterialComponentModule } from '../material.module';



@NgModule({
  declarations: [
    SellerAuthComponent,
    SellerHomeComponent,
    SellerAddProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialComponentModule,
    ReactiveFormsModule
  ]
})
export class SellerModule { }
