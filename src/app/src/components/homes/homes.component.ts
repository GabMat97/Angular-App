import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs'

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.less']
})
export class HomesComponent implements OnInit {

  bodyElements$;

  constructor() { }

  ngOnInit() {
    this.bodyElements$ = of([
      {
        title:'one',
        img:'www.google.com',
        content:'one',
      },
      {
        title:'two',
        img:'two',
        content:'two',
      },
      {
      title:'three',
      img:'three',
      content:'three',
      },
      {
      title:'four',
      img:'four',
      content:'four',
      },
    ])
  }

}
