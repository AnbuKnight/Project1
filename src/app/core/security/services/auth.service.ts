import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  loginError;

  constructor() { }

  /**
   * Initiates the login process .
   */
  login() {
  }

  logOut() {
  }


  handleCallback() {
  }


  renewAuthToken(callback) {
  }

  public get userInfo() {
    return '';
  }

  public get authToken() {
    return '';
  }

  /**
   * Tells whether the user is authenticated and still holds auth token that is not yet expired
   */
  public get isAuthenticated() {
    return this.userInfo && this.authToken;
  }
  /**
   * If roles exist in user object, returns it.
   * Else returns null.
   */
  public get getUserRoles() {
    return {};
  }

}
