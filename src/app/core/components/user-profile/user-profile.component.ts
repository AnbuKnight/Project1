import { Component, OnInit, Injector } from '@angular/core';
import { UserProfileService } from './user-profile.service';
import { UserProfileModel } from './user-profile.model';
import { ErrorService } from '../../error/error-service/error.service';
import { oprStatusResponse } from '../..';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  // global property starts here
  name: string;
  email: string;
  phone: string;
  facility: string;
  redirectToOutSystem: string;
  isButtonLinkdisable: boolean;
  appVersion: string;
  // global property ends here
  constructor(
    private userProfileService: UserProfileService,
    private errorService: ErrorService
  ) { }

  ngOnInit() {
    this.getUserInfoDetails();
  }

  getUserInfoDetails() {
    this.userProfileService.getUserInfo().subscribe(
      (result: UserProfileModel) => {
        if (result.oprStatus === oprStatusResponse.success) {
          this.fillingUserInfoFromEndPoint(result);
        } else {
          let errorMessage: string;
           errorMessage = result.message ? result.message : 'User Profile has unexpected response.Please contact administrator';
          this.handleCustomError(errorMessage);
        }
      }
    );
    // let result;
    // result = new UserProfileModel;
    // this.fillingUserInfoFromEndPoint(result);
  }

  fillingUserInfoFromEndPoint(userInfoEndPoint: UserProfileModel) {
    if (userInfoEndPoint.userProfiles.length) {
      this.name = userInfoEndPoint.userProfiles[0].Name;
      this.phone = userInfoEndPoint.userProfiles[0].MobilePhone;
      this.email = userInfoEndPoint.userProfiles[0].Email;
    } else {
      this.handleCustomError('User Profile data is missing.Please contact administrator');
    }
      this.isButtonLinkdisable = false;

  }

  handleCustomError(errorMessage: any) {
    this.errorService.logError(errorMessage);
    this.errorService.showError(errorMessage);
    this.isButtonLinkdisable = true;
  }

  refreshFacility() {
    this.getUserInfoDetails();
  }

}
