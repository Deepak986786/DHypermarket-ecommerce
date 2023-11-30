import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/core/components/home/home.component';
import { ErrorComponent } from './modules/core/components/error/error.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'seller', loadChildren: () => import('./modules/seller/seller.module').then(m => m.SellerModule)
  },
  {
    path:"**",component : ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
