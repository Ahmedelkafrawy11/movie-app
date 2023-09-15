import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private _AuthService:AuthService,private _Router:Router){}
  error:string = ''
  loginForm = new FormGroup({
   
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[A-Za-z][a-z0-9]{3,8}$'),
    ]),
  });
  submitLoginForm(loginForm: FormGroup) {
    this._AuthService.login(loginForm.value).subscribe((response)=>{
      if(response.message == "log in successfully"){
        localStorage.setItem('userToken',response.token)
        this._AuthService.saveCurrentUser()
        this._Router.navigate(['/home'])
      }else if (response.message === 'failed'){
        console.log(response);
        
        console.log('failed')
       this.error =response.message
       console.log(this.error)
       console.log('the error is shown to you');
   
       }
      }
       , (errorMessage)=> {
      console.log(errorMessage);
     
        this.error = errorMessage;
        
     }
    )
    
    console.log(loginForm);
  }

  
}
