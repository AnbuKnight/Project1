import { Injectable, Injector } from '@angular/core';
import { UserProfileModel, UserProfileParams, UserProfiles } from './user-profile.model';
import { AppHttpClient } from '../../http-client-extension/app-http-client';
import { AuthService } from '../..';
import { Observable } from 'rxjs';



@Injectable()
export class UserProfileService {

  constructor(
     private http: AppHttpClient, private authService: AuthService) { }
    // Global proporties
    private queryString: string;

   getUserInfo(): Observable<UserProfileModel> {
        let params: UserProfileParams;
        params = this.getParamsForUserInfo();

      if (params.UserIds && params.UserNames) {
          this.queryString = '?UserIds=' + params.UserIds + '&UserNames=' + params.UserNames;
      } else if (params.UserIds) {
          this.queryString = '?UserIds=' + params.UserIds;
      } else if (params.UserNames) {
          this.queryString = '?UserNames=' + params.UserNames;
      }  else {
          this.queryString = '';
      }

    return;
  }

  private getParamsForUserInfo() {
    const userInfodata = new UserProfileParams();
    console.log('Auth services' , this.authService);
    userInfodata.UserNames = '';
    return userInfodata;
  }

}
