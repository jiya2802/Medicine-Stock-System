import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinesListComponent } from './medicines-list.component';

describe('MedicinesListComponent', () => {
  let component: MedicinesListComponent;
  let fixture: ComponentFixture<MedicinesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicinesListComponent]
    });
    fixture = TestBed.createComponent(MedicinesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
