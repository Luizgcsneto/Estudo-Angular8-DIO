import { Component, OnInit } from '@angular/core';
import { Time } from '../model/Time';
import { TimeService } from '../service/time.service';

@Component({
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.css']
})
export class TimesComponent implements OnInit {

  times: Time[] = [];

  filteredTimes: Time[] = [];

  _filtro: string;

  constructor(private timeService: TimeService) { }

  ngOnInit() {

    this.times = this.timeService.retrieveAll();
    this.filteredTimes = this.times;

  }

  set filtro(value: string) {

    this._filtro = value;

    this.filteredTimes = this.times.filter((times: Time) => times.nome.toLocaleLowerCase().indexOf(this._filtro.toLocaleLowerCase()) > -1);
}

  get filtro() {

  return this._filtro;

}

}
