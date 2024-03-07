import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
  signForm!: FormGroup;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.createForm()
  }

  createForm():void{
    this.signForm = new FormGroup({
      userType : new FormControl(),
      contact: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      location: new FormControl()
    })}

  // sign():void{
  //   this.authService.submit(this.signForm.value).subscribe((value)=>{
  //     console.log("submitted..")
  //   })
  // }

}
