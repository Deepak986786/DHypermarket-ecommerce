import { RouterModule, Routes } from "@angular/router";
import { UserLoginComponent } from "./components/user-login/user-login.component";
import { UserProfileComponent } from "./components/user-profile/user-profile.component";
import { NgModule } from "@angular/core";
import { UserCartComponent } from "./components/user-cart/user-cart.component";
import { LoginGuard } from "./guards/login.guard";


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: UserLoginComponent },
    { path: 'profile', component: UserProfileComponent },
    { path: 'cart', component: UserCartComponent, canActivate: [LoginGuard] }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }