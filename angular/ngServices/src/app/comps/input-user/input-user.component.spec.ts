import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputUserComponent } from './input-user.component';

describe('InputUserComponent', () => {
  let component: InputUserComponent;
  let fixture: ComponentFixture<InputUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputUserComponent]
    });
    fixture = TestBed.createComponent(InputUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
