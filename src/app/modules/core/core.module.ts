import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialComponentModule } from '../material.module';
import { ImageCarouselComponent } from './components/image-carousel/image-carousel.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ErrorComponent } from './components/error/error.component';
import { SearchProductComponent } from './components/search-product/search-product.component';
import { ProductListByCategoryComponent } from './components/product-list-by-category/product-list-by-category.component';
import { CoreRoutingModule } from './core.routing';
import { HttpClientModule } from '@angular/common/http';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ImageCarouselComponent,
    ProductComponent,
    ProductDetailsComponent,
    PaymentComponent,
    ErrorComponent,
    SearchProductComponent,
    ProductListByCategoryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialComponentModule,
    CoreRoutingModule,
    HttpClientModule,
    IvyCarouselModule,
    CarouselModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
