import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatSetSummaryComponent } from './datat-set-summary.component';

describe('DatatSetSummaryComponent', () => {
  let component: DatatSetSummaryComponent;
  let fixture: ComponentFixture<DatatSetSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatatSetSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatSetSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
