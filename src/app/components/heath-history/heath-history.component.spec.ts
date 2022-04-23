import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeathHistoryComponent } from './heath-history.component';

describe('HeathHistoryComponent', () => {
  let component: HeathHistoryComponent;
  let fixture: ComponentFixture<HeathHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeathHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeathHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
