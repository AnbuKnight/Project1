import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { kitRoles, ShipmentRoles } from './../../../../userRoles.model';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit, AfterViewInit {
  @Input() isExpanded;
  @Input() isMobileView;
  @Input() sidenav;
  redirectToOutSystem: string;

  kitUserRoles = kitRoles;
  shipmentRoles = ShipmentRoles;
  constructor() { }

  ngOnInit() {
    this.redirectToOutSystem = environment.outSystemConfig.baseURL + environment.outSystemConfig.pages.landingPage;
  }
  ngAfterViewInit() {
    const  list: any = document.querySelectorAll('.sideBar-nav-links');
    list.forEach( a  =>  {
      a.removeAttribute('tabindex');
    });
  }
  closeSideNav() {
    if (this.isMobileView) {
      this.sidenav.close();
    }
  }

}
