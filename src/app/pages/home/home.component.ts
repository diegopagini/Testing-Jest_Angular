import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public listBook: Book[] = [];

  constructor(public readonly bookService: BookService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  public getBooks(): void {
    this.bookService
      .getBooks()
      .pipe(take(1))
      .subscribe((resp: Book[]) => {
        this.listBook = resp;
      });
  }
}
