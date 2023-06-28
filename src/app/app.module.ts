import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { BookService } from './services/book.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, PagesModule],
  providers: [BookService],
  bootstrap: [AppComponent],
})
export class AppModule {}
