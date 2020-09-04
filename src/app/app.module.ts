import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { MatCardModule } from '@angular/material/card';
import { DescriptionComponent } from './description/description.component';
import { CartComponentComponent } from './cart-component/cart-component.component';
import { MatTableModule } from '@angular/material/table';
import { CdkColumnDef } from '@angular/cdk/table';

const appRoutes = [
  { path: "", component: ProductsComponent },
  { path: "description/:product", component: DescriptionComponent },
  { path: "cart", component: CartComponentComponent }]


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    DescriptionComponent,
    CartComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CdkColumnDef],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
