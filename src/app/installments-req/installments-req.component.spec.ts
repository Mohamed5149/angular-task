import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallmentsReqComponent } from './installments-req.component';

describe('InstallmentsReqComponent', () => {
  let component: InstallmentsReqComponent;
  let fixture: ComponentFixture<InstallmentsReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallmentsReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallmentsReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
