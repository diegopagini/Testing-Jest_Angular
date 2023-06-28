import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import swal from 'sweetalert2';

import { Book } from '../models/book.model';

@Injectable()
export class BookService {
  constructor(private readonly _httpClient: HttpClient) {}

  public getBooks(): Observable<Book[]> {
    const url: string = environment.API_REST_URL + `/book`;
    return this._httpClient.get<Book[]>(url);
  }

  public getBooksFromCart(): Book[] {
    let listBook: Book[] = JSON.parse(
      localStorage.getItem('listCartBook') as any
    );
    if (listBook === null) {
      listBook = [];
    }
    return listBook;
  }

  public removeBooksFromCart(): void {
    localStorage.setItem('listCartBook', null as any);
  }

  public addBookToCart(book: Book) {
    let listBook: Book[] = JSON.parse(
      localStorage.getItem('listCartBook') as any
    );
    if (listBook === null) {
      // Create a list with the book
      book.amount = 1;
      listBook = [book];
    } else {
      const index = listBook.findIndex((item: Book) => {
        return book.id === item.id;
      });
      if (index !== -1) {
        // Update the quantity in the existing book
        (listBook[index] as any).amount++;
      } else {
        book.amount = 1;
        listBook.push(book);
      }
    }
    localStorage.setItem('listCartBook', JSON.stringify(listBook));
    this._toastSuccess(book);
  }

  public updateAmountBook(book: Book): Book[] {
    const listBookCart = this.getBooksFromCart();
    const index = listBookCart.findIndex((item: Book) => {
      return book.id === item.id;
    });
    if (index !== -1) {
      listBookCart[index].amount = book.amount;
      if (book.amount === 0) {
        listBookCart.splice(index, 1);
      }
    }
    localStorage.setItem('listCartBook', JSON.stringify(listBookCart));
    return listBookCart;
  }

  private _toastSuccess(book: Book) {
    const Toast = swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 2000,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', swal.stopTimer);
        toast.addEventListener('mouseleave', swal.resumeTimer);
      },
    });
    Toast.fire({
      icon: 'success',
      title: book.name + ' added to cart',
    });
  }
}