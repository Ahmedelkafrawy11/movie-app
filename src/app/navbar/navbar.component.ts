import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  // isAuthenticated: boolean = false;
  isLogged:boolean = false
  constructor(private _AuthService:AuthService){
    _AuthService.currentUser.subscribe(()=>{
     
    if(_AuthService.currentUser!.getValue() !==null){

       this.isLogged = true;
    }else{
      this.isLogged = false;
    }
   

   })
  }

  
}
