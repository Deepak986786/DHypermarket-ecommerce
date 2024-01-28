import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ProductListByCategoryComponent } from "./components/product-list-by-category/product-list-by-category.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { SearchProductComponent } from "./components/search-product/search-product.component";

const routes:Routes=[
    // {path: '',pathMatch:'full' ,redirectTo:''},
    {path: '',component:HomeComponent},
    {path: 'stores/:category',component:ProductListByCategoryComponent},
    {path: 'stores/:category/:productId',component:ProductDetailsComponent},
    {path: 'search',component:SearchProductComponent},
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class CoreRoutingModule {}