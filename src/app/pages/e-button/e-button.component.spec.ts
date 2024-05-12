import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EButtonComponent } from './e-button.component';

describe('EButtonComponent', () => {
  let component: EButtonComponent;
  let fixture: ComponentFixture<EButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EButtonComponent]
    });
    fixture = TestBed.createComponent(EButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
