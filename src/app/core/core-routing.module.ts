import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  OAuthCallbackGuard, AuthenticationGuard } from './security';
import { LogoutComponent } from './security/logout/logout.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UnsupportedBrowserComponent } from './components/unsupported-browser/unsupported-browser.component';
import { NoPermissionComponent } from './components/no-permission/no-permission.component';

const routes: Routes = [
  { path: 'logout', component: LogoutComponent },
  { path: 'unsupported-browser', component: UnsupportedBrowserComponent },
  { path: 'no-permission', component: NoPermissionComponent },
  { path: 'user-profile', component: UserProfileComponent, canActivate: [AuthenticationGuard] }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
