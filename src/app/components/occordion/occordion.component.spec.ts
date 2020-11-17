import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccordionComponent } from './occordion.component';

describe('OccordionComponent', () => {
  let component: OccordionComponent;
  let fixture: ComponentFixture<OccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
