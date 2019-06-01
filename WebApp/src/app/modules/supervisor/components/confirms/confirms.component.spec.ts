import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmsComponent } from './confirms.component';

describe('ConfirmsComponent', () => {
  let component: ConfirmsComponent;
  let fixture: ComponentFixture<ConfirmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
