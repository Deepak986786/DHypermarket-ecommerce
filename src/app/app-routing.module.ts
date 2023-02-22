import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/core/components/home/home.component';
import { SellerAddProductComponent } from './modules/seller/components/seller-add-product/seller-add-product.component';
import { SellerAuthComponent } from './modules/seller/components/seller-auth/seller-auth.component';
import { SellerHomeComponent } from './modules/seller/components/seller-home/seller-home.component';
import { AuthGuard } from './modules/shared/guard/auth.guard';

const routes: Routes = [
  {
    path:'' , component:HomeComponent
  },
  {
    path:'seller' , component:SellerAuthComponent
  },
  {
    path:'seller/home' , component:SellerHomeComponent , canActivate:[AuthGuard]
  },
  {
    path:'seller/add' , component:SellerAddProductComponent  , canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
