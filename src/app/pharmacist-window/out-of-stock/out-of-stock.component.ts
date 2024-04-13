import { Component } from '@angular/core';
import { MedicineDetails } from 'src/app/shared/interfaces/medicinedetails.interface';
import { PharmacistWindowServiceService } from '../pharmacist-window-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-out-of-stock',
  templateUrl: './out-of-stock.component.html',
  styleUrls: ['./out-of-stock.component.css']
})
export class OutOfStockComponent {
  outOfStockMedicines:MedicineDetails[] = [];
  constructor(private pharmacistwindowService: PharmacistWindowServiceService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.loadOutOfStockMedicines();
  }

  loadOutOfStockMedicines() {
    this.pharmacistwindowService.getOutOfStockMedicines().subscribe(
      data => {
        this.outOfStockMedicines = data;
        console.log(this.outOfStockMedicines)
      },
      error => {
        console.error('Error fetching out-of-stock medicines:', error);
      }
    );
  }
}
