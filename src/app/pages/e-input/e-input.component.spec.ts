import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EInputComponent } from './e-input.component';

describe('EInputComponent', () => {
  let component: EInputComponent;
  let fixture: ComponentFixture<EInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EInputComponent]
    });
    fixture = TestBed.createComponent(EInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
