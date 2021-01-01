import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationComponent } from './notification.component';
import { MaterialModule } from '../../../material.component';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('NotificationComponent', () => {
  let component: NotificationComponent;
  let fixture: ComponentFixture<NotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ NotificationComponent ],
      providers: [ { provide: MatSnackBarRef, useValue: MatSnackBarRef },
        { provide: MAT_SNACK_BAR_DATA,  useValue: MAT_SNACK_BAR_DATA }]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [NotificationComponent],
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should ngOnInit', () => {
    expect(component.ngOnInit());
  });
  it('should onClose', () => {
    // expect(component.onClose());
  });
});
