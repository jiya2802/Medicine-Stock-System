import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
  signForm!:FormGroup;
  constructor(private authService: AuthService,private router:Router) {}

  ngOnInit(): void {
    this.createForm()
  }

  createForm():void{
    this.signForm = new FormGroup({
      UserType : new FormControl(),
      ContactNumber: new FormControl(),
      Email: new FormControl(),
      Password: new FormControl(),
      Location: new FormControl()
    })}

  sign():void{
    this.authService.submit(this.signForm.value).subscribe((value)=>{
      console.log("submitted..");
      this.router.navigate(['/login'])
    })
  }

}
