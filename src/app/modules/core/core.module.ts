import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { MaterialComponentModule } from '../material.module';
import { ImageCarouselComponent } from './components/image-carousel/image-carousel.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ErrorComponent } from './components/error/error.component';
import { SearchProductComponent } from './components/search-product/search-product.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ImageCarouselComponent,
    ProductComponent,
    ProductDetailsComponent,
    CartComponent,
    PaymentComponent,
    ErrorComponent,
    SearchProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialComponentModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
