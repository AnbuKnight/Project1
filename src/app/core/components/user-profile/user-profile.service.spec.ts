import { TestBed, inject } from '@angular/core/testing';

import { UserProfileService } from './user-profile.service';
import { AppHttpClient } from '../../http-client-extension/app-http-client';
import { HttpHandler } from '@angular/common/http';
import { AuthService, oprStatusResponse } from '../..';

let service: UserProfileService = null;
const userProfile = {
  'userProfiles': [
    {
      'UserId': 111,
      'Name': 'Thani',
      'UserName': '',
      'Email': '',
      'MobilePhone': null,
    }
  ],
  'oprStatus': 200,
  'message': 'Records found for User Profile'
};

const userInfo = {
  'profile' :
  { 'userNameWithDomain' : '' }
};

class MockhttpClient {
  public Get(req?) {
    return userProfile;

  }
}

class MockAuthService {
  public get userInfo() {
    return userInfo;
  }
}

describe('UserProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserProfileService,
        { provide: AppHttpClient, useClass: MockhttpClient} ,
        { provide: HttpHandler, useValue: HttpHandler } ,
        { provide: AuthService, useClass: MockAuthService }
      ]
    });
  });

  it('should be created', inject([UserProfileService], (userProfileservice: UserProfileService) => {
    service = userProfileservice;
    expect(userProfileservice).toBeTruthy();
  }));

  it('Should getUserInfo as expect', (done) => {
    service
      .getUserInfo()
        .subscribe((response) => {
          console.log('Result', response);
            expect(response.oprStatus).toEqual(oprStatusResponse.success);
            expect(response.userProfiles.length).toBeGreaterThan(0);
            done();
        });
  });

});
