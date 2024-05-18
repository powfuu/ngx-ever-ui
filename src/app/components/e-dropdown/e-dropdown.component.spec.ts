import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EDropdownComponent } from './e-dropdown.component';

describe('EDropdownComponent', () => {
  let component: EDropdownComponent;
  let fixture: ComponentFixture<EDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EDropdownComponent]
    });
    fixture = TestBed.createComponent(EDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
