import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EItemNavigatorComponent } from './e-item-navigator.component';

describe('EItemNavigatorComponent', () => {
  let component: EItemNavigatorComponent;
  let fixture: ComponentFixture<EItemNavigatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EItemNavigatorComponent]
    });
    fixture = TestBed.createComponent(EItemNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
