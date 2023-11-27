import { RouterModule, Routes } from "@angular/router";
import { SellerHomeComponent } from "./components/seller-home/seller-home.component";
import { SellerAddProductComponent } from "./components/seller-add-product/seller-add-product.component";
import { NgModule } from "@angular/core";
import { SellerLoginComponent } from "./components/seller-login/seller-login.component";
import { SellerProfileComponent } from "./components/seller-profile/seller-profile.component";

const routes: Routes = [
    { path: '', component: SellerLoginComponent },
    { path: 'home', component: SellerHomeComponent },
    { path: 'add-product', component: SellerAddProductComponent },
    { path: 'profile', component: SellerProfileComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SellerRoutingModule { }