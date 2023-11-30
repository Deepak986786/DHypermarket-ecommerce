import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SellerHomeComponent } from './components/seller-home/seller-home.component';
import { SellerAddProductComponent } from './components/seller-add-product/seller-add-product.component';
import { MaterialComponentModule } from '../material.module';
import { SellerRoutingModule } from './seller.routing';
import { SellerProfileComponent } from './components/seller-profile/seller-profile.component';
import { SellerLoginComponent } from './components/seller-login/seller-login.component';



@NgModule({
  declarations: [
    SellerHomeComponent,
    SellerAddProductComponent,
    SellerProfileComponent,
    SellerLoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialComponentModule,
    ReactiveFormsModule,
    SellerRoutingModule
  ]
})
export class SellerModule { }
