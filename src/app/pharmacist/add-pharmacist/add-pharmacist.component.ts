import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PharmacistService } from '../pharmacist.service';

@Component({
  selector: 'app-add-pharmacist',
  templateUrl: './add-pharmacist.component.html',
  styleUrls: ['./add-pharmacist.component.css']
})
export class AddPharmacistComponent implements OnInit{

  pharmacistForm!: FormGroup;
  constructor(private pharmacistService: PharmacistService) {}

  ngOnInit(): void {
    this.createForm()
  }

  createForm():void{
    this.pharmacistForm = new FormGroup({
      Name : new FormControl(),
      Email: new FormControl(),
      Location: new FormControl()
    })}

  addpharm():void{
    this.pharmacistService.pharm(this.pharmacistForm.value).subscribe((value)=>{
      console.log("added successfully");
    })
  }

}
