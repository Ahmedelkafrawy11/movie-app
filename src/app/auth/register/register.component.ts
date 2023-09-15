import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  error:string = '';
  constructor(private _AuthService:AuthService, private _Router:Router) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      firstName: new FormControl(null, [
        Validators.minLength(3),
        Validators.maxLength(10),
        Validators.required,
      ]),
      lastName: new FormControl(null, [
        Validators.minLength(3),
        Validators.maxLength(10),
        Validators.required,
      ]),
      age: new FormControl(null, [
        Validators.required,
        Validators.min(14),
        Validators.max(70),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[A-Za-z][a-z0-9]{3,8}$'),
      ]),
    });
  }

  submitRegisterForm(registerForm: FormGroup) {
    console.log("submit");
    this._AuthService.register(registerForm.value).subscribe((response)=>{
      if(response.message === 'success' ){
        console.log(registerForm)
      console.log('done')
      console.log(response);
  
      this._Router.navigate(['/login'])
      }else if (response.message === 'failed'){
       
      this.error =this._AuthService.errorMessage;
      console.log(this.error)
  
      }
    } , (errorMessage)=> {
    console.log(errorMessage);
    
      this.error = errorMessage;
    })
    if (!registerForm.valid) return;

    const firstNameValue = this.registerForm.get('firstName')?.value;
    const lastNameValue = this.registerForm.get('lastName')?.value;
    const age = this.registerForm.get('age')?.value;
    const email = this.registerForm.get('email')?.value;
    const password = this.registerForm.get('password')?.value;
  }
}
