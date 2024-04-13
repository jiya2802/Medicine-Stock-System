import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMedicineComponent } from './single-medicine.component';

describe('SingleMedicineComponent', () => {
  let component: SingleMedicineComponent;
  let fixture: ComponentFixture<SingleMedicineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleMedicineComponent]
    });
    fixture = TestBed.createComponent(SingleMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
