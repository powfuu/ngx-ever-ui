import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EFlexComponent } from './e-flex.component';

describe('EFlexComponent', () => {
  let component: EFlexComponent;
  let fixture: ComponentFixture<EFlexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EFlexComponent]
    });
    fixture = TestBed.createComponent(EFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
