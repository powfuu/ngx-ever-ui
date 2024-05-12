import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ESearchComponent } from './e-search.component';

describe('ESearchComponent', () => {
  let component: ESearchComponent;
  let fixture: ComponentFixture<ESearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ESearchComponent]
    });
    fixture = TestBed.createComponent(ESearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
