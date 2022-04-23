import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalExamDetailComponent } from './physical-exam-detail.component';

describe('PhysicalExamDetailComponent', () => {
  let component: PhysicalExamDetailComponent;
  let fixture: ComponentFixture<PhysicalExamDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicalExamDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalExamDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
