import { TestBed, inject } from '@angular/core/testing';

import { ErrorService } from './error.service';
import { AppHttpClient } from '../../http-client-extension/app-http-client';
import { LoggerService } from '../../logger/logger.service';
import { AuthService } from '../..';
import { LocationStrategy } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from 'src/app/shared/notification/notification.service';
import { Observable } from 'rxjs';

describe('ErrorService', () => {
  let errorService: ErrorService;
  let httpResp: HttpErrorResponse;
  const errordata = {'name': 'test', 'originalStack': 'test stack', 'error': 'test message',
    'message': 'message' };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorService, LocationStrategy,
        {provide:  AppHttpClient,  useClass: MockAppHttpClient},
        { provide: LoggerService, useClass: MockLoggerService},
        { provide: NotificationService, useClass: MockNotificationService},
        { provide: AuthService, useClass: MockAuthService },
      ]
    });
  });
  class MockAuthService {
    public get userInfo() {
      return {
        profile: {
          name: '',
          email: ''
        }
      };
    }
  }
  class MockAppHttpClient {
    Get(reqObj: any) {
      return;
    }
    Post(reqObj: any) {
      return;
    }
    Patch(reqObj: any) {
      return;
    }
    Delete(reqObj: any) {
      return;
    }
  }

  class MockLoggerService {
    logMessage(message) {
      console.log('messaged logged : ', message);
    }
   }
  class MockNotificationService {
    showNotifications(message) {
      console.log('show notifications:', message);
    }
   }

  it('should be created', inject([ErrorService], (service: ErrorService) => {
    errorService = service;
    expect(service).toBeTruthy();
  }));

  it(' Should logError as expect', () => {
    expect(errorService.logError(errordata));
    });

    it('should be handleException', () => {
      expect(errorService.handleException(errordata));
    });
    it('should be showError', () => {
      expect(errorService.showError(errordata));
    });
    it('should be handleAPIError', () => {
      httpResp = new HttpErrorResponse({status: 403});
      expect(errorService.handleAPIError(httpResp));
      httpResp = new HttpErrorResponse({status: 400});
      expect(errorService.handleAPIError(httpResp));
      httpResp = new HttpErrorResponse({status: 404});
      expect(errorService.handleAPIError(httpResp));
      httpResp = new HttpErrorResponse({status: 503});
      expect(errorService.handleAPIError(httpResp));
      httpResp = new HttpErrorResponse({status: 504});
      expect(errorService.handleAPIError(httpResp));
      httpResp = new HttpErrorResponse({status: 409});
      expect(errorService.handleAPIError(httpResp));
      httpResp = new HttpErrorResponse({status: 500});
      expect(errorService.handleAPIError(httpResp));
      httpResp = new HttpErrorResponse({status: 501});
      expect(errorService.handleAPIError(httpResp));
      httpResp = new HttpErrorResponse({status: 502});
      expect(errorService.handleAPIError(httpResp));
      httpResp = new HttpErrorResponse({status: 401});
      expect(errorService.handleAPIError(httpResp));
      httpResp = new HttpErrorResponse({status: 210});
      expect(errorService.handleAPIError(httpResp));
    });
});

