import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PDashboardComponent } from './p-dashboard.component';

describe('PDashboardComponent', () => {
  let component: PDashboardComponent;
  let fixture: ComponentFixture<PDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PDashboardComponent]
    });
    fixture = TestBed.createComponent(PDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
