import { HttpClient ,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable, catchError, tap, throwError,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public errorMessage:string =''

  

  constructor(private _HttpClient:HttpClient) {
  }
  currentUser=new BehaviorSubject<string | null>(null);
  saveCurrentUser(){
    let token:any = localStorage.getItem('userToken')
    this.currentUser.next(jwtDecode(token)) 
    console.log(this.currentUser);
    
  }
  register(formData:any):Observable<any> {
    console.log('iam in register');
  
    
    return this._HttpClient.post('http://localhost:3000/users/register',
     formData).pipe(
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }
  login(formData:any):Observable<any> {
    console.log('iam in login');
    return this._HttpClient.post('http://localhost:3000/users/login',formData)
    .pipe(
      catchError((error: HttpErrorResponse) => this.handleError(error))
      
    );
    
    
    
  }
  

  private handleError(error: HttpErrorResponse) {
    console.log('handle error is working')
    // You can customize error handling here
    console.error('An error occurred:', error);
    // console.log(error.error.error);
    this.errorMessage = error.error.error;
    
    console.log(this.errorMessage);
    
  
    // Rethrow the error as a user-friendly message or handle it as needed
    return throwError(this.errorMessage);
  }

  
}