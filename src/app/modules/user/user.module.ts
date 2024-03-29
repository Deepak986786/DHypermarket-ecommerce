import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserRoutingModule } from './user.routing';
import { MaterialComponentModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { UserCartComponent } from './components/user-cart/user-cart.component';



@NgModule({
  declarations: [
    UserLoginComponent,
    UserProfileComponent,
    UserCartComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialComponentModule,
    FormsModule
  ]
})
export class UserModule { }
