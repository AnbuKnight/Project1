import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, NavigationExtras, Router } from '@angular/router';

import { AuthService } from '../services';
import { NgxPermissionsService, NgxRolesService } from 'ngx-permissions';
import { Observable } from 'rxjs';

/**
 * It protects routes for authentication.
 * If user is not authenticated, it redirects to AD authentication
 */
@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(
    private router: Router,
    public ngxRolesService: NgxPermissionsService,
    private authService: AuthService,
    private rolePermissionsService: NgxPermissionsService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const navigationExtras: NavigationExtras = {
      queryParams: { 'redirectUrl': route.url }
    };

    if (!this.authService.isAuthenticated) {
      this.authService.login();
      return false;
    }
    if (this.authService.isAuthenticated) {
      const roles = this.authService.getUserRoles || []; 
     // this.rolePermissionsService.loadPermissions(roles);
    }
    return true;
  }
}
