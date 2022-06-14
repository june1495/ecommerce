import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { CategoryitemComponent } from './components/categoryitem/categoryitem.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginpageComponent } from './views/loginpage/loginpage.component';
import { RegisterpageComponent } from './views/registerpage/registerpage.component';
import { AllproductsComponent } from './views/allproducts/allproducts.component';
import { CartComponent } from './views/cart/cart.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    CategoriesComponent,
    CategoryitemComponent,
    NavbarComponent,
    ProductComponent,
    ProductsComponent,
    LoginpageComponent,
    RegisterpageComponent,
    AllproductsComponent,
    CartComponent,
    HomepageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
