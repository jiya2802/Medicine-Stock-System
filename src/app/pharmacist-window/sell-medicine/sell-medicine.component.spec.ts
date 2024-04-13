import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellMedicineComponent } from './sell-medicine.component';

describe('SellMedicineComponent', () => {
  let component: SellMedicineComponent;
  let fixture: ComponentFixture<SellMedicineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellMedicineComponent]
    });
    fixture = TestBed.createComponent(SellMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
