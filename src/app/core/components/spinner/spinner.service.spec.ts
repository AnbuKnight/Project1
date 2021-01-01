import { TestBed, inject } from '@angular/core/testing';

import { SpinnerService } from './spinner.service';
import { Observable } from 'rxjs/Observable';
import { AppHttpClient } from '../../http-client-extension/app-http-client';

class MockAppHttpClient {
  Get(reqObj: any) {
    return(Observable.of({}));
  }
  Post(reqObj: any) {
    return(Observable.of({}));
  }
  Patch(reqObj: any) {
    return(Observable.of({}));
  }
}


describe('SpinnerService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpinnerService,
        {provide: AppHttpClient, useClass: MockAppHttpClient}
      ]
    });
  });

  it('should be created', inject([SpinnerService], (service: SpinnerService) => {
    expect(service).toBeTruthy();
    service.showSpinner();
    service.hideSpinner();
    service.clearSpinnerInfo();
  }));

});
