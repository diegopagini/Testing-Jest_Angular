import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavModule } from '../nav/nav.module';
import { ReduceTextPipe } from '../pipes/reduce-text/reduce-text.pipe';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

@NgModule({
  imports: [BrowserModule, CommonModule, NavModule, PagesRoutingModule],
  declarations: [PagesComponent, HomeComponent, CartComponent, ReduceTextPipe],
  exports: [PagesComponent],
})
export class PagesModule {}
