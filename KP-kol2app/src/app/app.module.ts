import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersKpComponent } from './components/orders-kp/orders-kp.component';
import { OrdersItemKpComponent } from './components/orders-item-kp/orders-item-kp.component';
import { OrdersDetailsKpComponent } from './components/orders-details-kp/orders-details-kp.component';
import { OrdersKpComponent } from './components/blog-item/blog-item.component';
import { OrdersItemKpComponent } from './components/blog-item/blog-item.component';
import { OrdersDetailsKpComponent } from './components/blog-item/blog-item.component';


@NgModule({
  declarations: [
    AppComponent,
    OrdersKpComponent,
    OrdersItemKpComponent,
    OrdersDetailsKpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
