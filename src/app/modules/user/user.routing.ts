import { RouterModule, Routes } from "@angular/router";
import { UserLoginComponent } from "./components/user-login/user-login.component";
import { UserProfileComponent } from "./components/user-profile/user-profile.component";
import { NgModule } from "@angular/core";


const routes: Routes = [
    { path: '', component: UserLoginComponent },
    { path: 'profile', component: UserProfileComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }