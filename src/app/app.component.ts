import { Component } from '@angular/core';
import { LoginService } from './login/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DIX';
  public isUserLoggedin: boolean = false;
  constructor(private loginService: LoginService) {
  }
  ngOnInit(): void {
    this.loginService.getEmitter().subscribe((isUserLoggedIn) => {
      this.isUserLoggedin = isUserLoggedIn;
    });
  }
}
