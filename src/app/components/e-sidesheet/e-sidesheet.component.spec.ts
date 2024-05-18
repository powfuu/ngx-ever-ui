import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ESidesheetComponent } from './e-sidesheet.component';

describe('ESidesheetComponent', () => {
  let component: ESidesheetComponent;
  let fixture: ComponentFixture<ESidesheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ESidesheetComponent]
    });
    fixture = TestBed.createComponent(ESidesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
