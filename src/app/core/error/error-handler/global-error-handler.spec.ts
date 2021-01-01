import { TestBed, inject } from '@angular/core/testing';

import { GlobalErrorHandler } from './global-error-handler';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ErrorService } from '../error-service/error.service';
import { AppMonitoringService } from '../../monitoring/app-monitoring.service';

describe('GlobalErrorHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalErrorHandler,
        { provide: ErrorService, useClass: MockErrorService },
        { provide: AppMonitoringService, useClass: MockErrorService },
      ]
    });
  });

  it('should be created', inject([GlobalErrorHandler], (service: GlobalErrorHandler) => {
    expect(service).toBeTruthy();
  }));

  it('should be handleError with normal error', inject([GlobalErrorHandler], (service: GlobalErrorHandler) => {
    const errorTemp = new Error();
    expect(service.handleError(errorTemp));
  }));
  it('should be handleError with http response error', inject([GlobalErrorHandler], (service: GlobalErrorHandler) => {
    const responseError = new HttpErrorResponse({});
    expect(service.handleError(responseError));
  }));
  class MockErrorService {
    logError(req) {
      console.log('logged error is :', req);
    }
    handleException(req) {
      console.log('logged error is :', req);
    }
    showError(req) {
      console.log('logged error is :', req);
    }

  }
});
