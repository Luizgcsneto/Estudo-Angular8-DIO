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

  constructor(private timeService: TimeService) { }

  ngOnInit() {
    this.times = this.timeService.retrieveAll()
  }

}
