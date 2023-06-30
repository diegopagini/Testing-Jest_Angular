import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { NavComponent } from './nav.component';

@NgModule({
  imports: [BrowserModule, CommonModule, RouterModule],
  declarations: [NavComponent],
  exports: [NavComponent],
})
export class NavModule {}
