import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPermissionsModule } from 'ngx-permissions';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './app-layouts/header/header.component';
import { LeftNavComponent } from './app-layouts/left-nav/left-nav.component';
import { ContextService } from '../context/context.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileService } from './user-profile/user-profile.service';
import { SpinnerModule } from './spinner/spinner.module';
import { UnsupportedBrowserComponent } from './unsupported-browser/unsupported-browser.component';
import { NoPermissionComponent } from './no-permission/no-permission.component';
import { NoPrivilegeComponent } from './no-privilege/no-privilege.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  imports: [
  CommonModule,
    MaterialModule,
    RouterModule,
    SpinnerModule,
    NgxPermissionsModule.forChild()
  ],
  declarations: [HeaderComponent, LeftNavComponent, UserProfileComponent, UnsupportedBrowserComponent,
    NoPermissionComponent, NoPrivilegeComponent],
  providers: [ContextService, UserProfileService],
  exports: [ HeaderComponent, LeftNavComponent, SpinnerModule, UserProfileComponent]
})
export class CorecomponentsModule { }
