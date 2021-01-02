import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor( private loginService: LoginService, private router: Router) { }
  loginForm = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });
  ngOnInit(): void {
  }

  login() {
    console.log(this.loginForm.value);
    this.loginService.getfromJSON(this.loginForm.controls.email.value, this.loginForm.controls.password.value).subscribe(
      authenticated => {
          if (authenticated[0] !== 0) {
              // this.router.navigateByUrl('/dashboard');
              this.router.navigateByUrl('/dataSet');
          } else {
            console.log(authenticated);
            this.router.navigateByUrl('/unauthorized');
          }
      });
  }

}
