import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './components/signin/signin.component';
import { RouterModule } from '@angular/router';
import { LOGIN_ROUTES } from '../routes/login.route';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(LOGIN_ROUTES),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
