import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {

  authStatus = 'Authentication is in progress';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    if (!this.authService.loginError) {
        this.authService.login();
    } else {
      this.authStatus = this.authService.loginError;
    }
  }
}
