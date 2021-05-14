import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Time } from '../model/Time';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  retrieveAll(): Time[] {
    return Times;
  }

  constructor(private httpClient: HttpClient) { }
}



var Times: Time[] = [
  {
      id: 1,
      nome: 'Flamengo',
      cores: 'Vermelho e preto',
      estado: 'Rio de janeiro',
      imagem: '/assets/images/flamengo.png'
  },
  {
      id: 2,
      nome: 'Vasco',
      cores: 'Branco e preto',
      estado: 'Rio de janeiro',
      imagem: '/assets/images/vasco.png'
  },
  {
      id: 3,
      nome: 'Botafogo',
      cores: 'Branco e preto',
      estado: 'Rio de janeiro',
      imagem: '/assets/images/botafogo.png'
  },
  {
      id: 4,
      nome: 'Fluminense',
      cores: 'branco verde',
      estado: 'Rio de janeiro',
      imagem: '/assets/images/fluminense.png'
  }
];
