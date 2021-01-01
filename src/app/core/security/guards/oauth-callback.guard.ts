import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services';
import { Observable } from 'rxjs';

@Injectable()
export class OAuthCallbackGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthService) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        this.authService.handleCallback();

        if (this.authService.userInfo) {
            const returnUrl = route.queryParams['returnUrl'];

            if (!returnUrl) {
                this.router.navigate(['']);
            } else {
                this.router.navigate([returnUrl], { queryParams: route.queryParams });
            }
        } else {
            this.authService.loginError = { error: 'access_denied', errorDescription: 'Resource owner denied consent' };
            // this.router.navigate(['welcome']);
        }

        return false;
    }
}
