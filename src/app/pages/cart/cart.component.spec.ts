import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

import { CartComponent } from './cart.component';

const bookList: Book[] = [
  {
    id: 'test',
    name: 'test',
    author: 'test',
    isbn: 'test',
    description: 'test',
    photoUrl: 'test',
    price: 10,
    amount: 2,
  },
  {
    id: 'test1',
    name: 'test1',
    author: 'test1',
    isbn: 'test1',
    description: 'test1',
    photoUrl: 'test1',
    price: 15,
    amount: 3,
  },
];

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartComponent],
      imports: [HttpClientTestingModule],
      providers: [BookService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent); // To create the component.
    component = fixture.componentInstance; // To instanciate the component.
    fixture.detectChanges(); // To trigger the change detection cycle for the component.
  });

  it('should create the CartComponent', () => {
    expect(component).toBeTruthy();
  });

  it('getTotalPrice should retruns an amount', () => {
    const result = component.getTotalPrice(bookList);
    expect(result).toBeGreaterThan(0);
  });
});
