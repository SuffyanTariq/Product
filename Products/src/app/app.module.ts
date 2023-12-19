import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { AddEditProductsComponent } from './products/add-edit-products/add-edit-products.component';
import { ShowProductsComponent } from './products/show-products/show-products.component';
import { ProductApiService } from './services/product-api.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddEditProductsComponent,
    ShowProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
