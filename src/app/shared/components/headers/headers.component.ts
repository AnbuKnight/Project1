import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
  public applyTabStyle: boolean = false;  
  public activeTab: string = 'dataSet';
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  tabChange(event: any) {
    this.applyTabStyle = true;
  }

  loadScreen(input: any) {
    switch (input) {
      case 'dataSet':
        this.activeTab = 'dataSet';
        this.router.navigateByUrl('/dataSet');
        break;
      case 'dashboard':
        this.activeTab = 'home';
        this.router.navigateByUrl('/dashboard');
        break;
      default:
        this.router.navigateByUrl('/dataSet');
        break;
    }
  }
}
