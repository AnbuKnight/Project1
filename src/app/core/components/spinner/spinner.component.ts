import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  showSpinnerFlag: boolean;

  constructor(public spinnerService: SpinnerService) {}

  ngOnInit() {
    this.spinnerService.getSpinnerInfo.subscribe(spinnerInfo => {
      // console.log(spinnerInfo.fullLoadingCount);
      if (spinnerInfo.fullLoadingCount > 0) {
        this.showSpinnerFlag = true;
      } else {
        this.showSpinnerFlag = false;
      }
    });

  }
}
