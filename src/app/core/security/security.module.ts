import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services';
import { AuthenticationGuard } from './guards';
import { SplashComponent } from './splash/splash.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SplashComponent, LogoutComponent],
  exports: [SplashComponent],
  providers: [AuthService, AuthenticationGuard]
})
export class SecurityModule { }
