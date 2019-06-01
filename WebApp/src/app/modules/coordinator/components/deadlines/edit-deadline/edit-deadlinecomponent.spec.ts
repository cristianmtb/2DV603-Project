import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeadlineComponent } from './edit-deadline.component';

describe('EditDeadlineComponent', () => {
  let component: EditDeadlineComponent;
  let fixture: ComponentFixture<EditDeadlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDeadlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
