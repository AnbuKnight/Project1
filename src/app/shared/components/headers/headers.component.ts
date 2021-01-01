import { Component, OnInit } from '@angular/core';
import {SharedModule} from '../../shared.module';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
public applyTabStyle:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  tabChange(event:any)
  {
    this.applyTabStyle=true;
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }

}
