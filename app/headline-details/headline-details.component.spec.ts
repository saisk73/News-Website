import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlineDetailsComponent } from './headline-details.component';

describe('HeadlineDetailsComponent', () => {
  let component: HeadlineDetailsComponent;
  let fixture: ComponentFixture<HeadlineDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadlineDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadlineDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
