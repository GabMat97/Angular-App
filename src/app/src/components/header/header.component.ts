import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  links$;

  constructor() {
  }

  ngOnInit() {
    this.links$ = of([
      {
        text: 'test1',
        link: 'yikes',
      },
      {
        text: 'test2',
        link: 'lel',
      },
      {
        text: 'test3',
        link: 'da',
      },
      {
        text: 'test4',
        link: 'bri',
      },
    ])
  }

}
