import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!:FormGroup
  selectedRole: string = '';

  constructor(private authservice:AuthService,private router : Router){}
  ngOnInit(): void {
    this.createForm()
  }

  createForm():void{
    this.loginForm = new FormGroup({
      UserType : new FormControl(),
      Email: new FormControl(),
      Password: new FormControl()
    })}
  login():any{
    console.log(this.loginForm.value);
    this.authservice.login(this.loginForm.value).subscribe((value)=>{
      console.log("logined");
      console.log(value);
      
      if(value.validYn===1){
        // this.cookieService.set("token",value.token)
        // this.cookieService.set("username",value.username)
        // this.cookieService.set("userid",value.userid)
        // this.cookieService.set("isLoginedIn","1")
        // this.cookieService.set("role",value.user_role)
        // this.router.navigate(['/home'])
        this.selectedRole=value.UserType;
        switch (this.selectedRole) {
          case 'Admin':
            this.router.navigate(['/admin']);
            break;
          case 'Pharmacist':
            this.router.navigate(['/pdashboard']);
            break;
          case 'Medical Officer':
            this.router.navigate(['/medicalOfficer']);
            break;
          default:
            // Handle default case
            break;
        }
    

      }
    })

  }
}
