import { TestBed, inject } from '@angular/core/testing';

import { NotificationService } from './notification.service';
import { MaterialModule } from '../../../material.component';
import { NotificationData } from './notification-model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { NotificationComponent } from './notification.component';

describe('NotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, BrowserAnimationsModule],
      declarations: [NotificationComponent],
      providers: [NotificationService]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [NotificationComponent],
      }
    });
  });

  it('should be created', inject([NotificationService], (service: NotificationService) => {
    expect(service).toBeTruthy();
  }));
  it('should be showNotifications', inject([NotificationService], (service: NotificationService) => {
    const notificationData: NotificationData = new NotificationData();
    notificationData.timeout = 3000;
    expect(service.showNotifications(notificationData));
  }));
});
