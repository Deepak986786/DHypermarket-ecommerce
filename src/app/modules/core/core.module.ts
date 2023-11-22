import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { MaterialComponentModule } from '../material.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialComponentModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
