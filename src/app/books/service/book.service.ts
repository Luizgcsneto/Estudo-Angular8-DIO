import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../model/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  retrieveAll(): Book[]{
    return books;
  }

  retrieveById(id: number): Book{
    return books.find((bookInterator: Book) => bookInterator.id === id);
  }

  constructor(private httpCliente: HttpClient) { }


}

var books: Book[] = [
  {
    id: 1,
    name: 'Guerra dos Tronos',
    author: 'George rr Martin',
    numPages: 510,
    image: '/assets/images/guerra-dos-tronos.png'
  },
  {
    id: 2,
    name: 'It a coisa',
    author: 'Sthepan King',
    numPages: 389,
    image: '/assets/images/it-acoisa.png'
  },
  {
    id: 3,
    name: 'Dom Casmurro',
    author: 'Machado de Assis',
    numPages: 860,
    image: '/assets/images/dom-casmurro.png'
  }
]


