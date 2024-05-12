import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ETooltipComponent } from './e-tooltip.component';

describe('ETooltipComponent', () => {
  let component: ETooltipComponent;
  let fixture: ComponentFixture<ETooltipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ETooltipComponent]
    });
    fixture = TestBed.createComponent(ETooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
