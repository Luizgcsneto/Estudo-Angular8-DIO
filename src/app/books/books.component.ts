import { Component, OnInit } from '@angular/core';
import { Book } from './model/Book';
import { BookService } from './service/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];

  filteredBooks: Book[] = [];

  _filtro: string;

  constructor(private bookService: BookService) { }

  ngOnInit() {

    this.books = this.bookService.retrieveAll();
    this.filteredBooks = this.books;
  }

  set filtro(value: string) {

    this._filtro = value;

    this.filteredBooks = this.books.filter((book: Book) => book.name.toLocaleLowerCase().indexOf(this._filtro.toLocaleLowerCase()) > -1);
}

  get filtro() {

  return this._filtro;

}





}
