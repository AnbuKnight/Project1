import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { messages, sessionStorageNames } from 'src/app/constants';
import { SessionStorage } from '../../session-storage/session.storage';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private sessionStorage: SessionStorage, private router: Router) { }
logoutMessage;
public data: any = [];
  ngOnInit() {

    this.data = this.sessionStorage.getSessionStorageValue(sessionStorageNames.idleTimeOut);
    if ( this.data[sessionStorageNames.idleTimeOut] === 'yes') {
    this.logoutMessage = messages.idleTimeLogOutMessage;
    } else {
    this.logoutMessage = messages.logOutMessage;
    }
  }
  login() {
    this.router.navigate(['']);
  }

}
