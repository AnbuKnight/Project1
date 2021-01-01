import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SpinnerComponent } from './spinner.component';
import { SpinnerService } from './spinner.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { SpinnerMetaInfo } from './spinner-meta-info.model';

describe('SpinnerComponent', () => {
  let component: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerComponent ],
      providers: [
      { provide: SpinnerService, useClass: MockSpinnerService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.ngOnInit());
  });

  class MockSpinnerService {
    private spinnerInfoStream: Subject<SpinnerMetaInfo> = new Subject<SpinnerMetaInfo>();
    getSpinnerInfo  = this.spinnerInfoStream.asObservable();
  }


});
