import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EBadgeComponent } from './e-badge.component';

describe('EBadgeComponent', () => {
  let component: EBadgeComponent;
  let fixture: ComponentFixture<EBadgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EBadgeComponent]
    });
    fixture = TestBed.createComponent(EBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
