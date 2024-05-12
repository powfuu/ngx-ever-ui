import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ELoadingComponent } from './e-loading.component';

describe('ELoadingComponent', () => {
  let component: ELoadingComponent;
  let fixture: ComponentFixture<ELoadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ELoadingComponent]
    });
    fixture = TestBed.createComponent(ELoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
