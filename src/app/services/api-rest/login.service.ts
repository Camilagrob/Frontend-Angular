import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public logged : boolean = sessionStorage.getItem('currentUser') == null ? false : true;
  
  private loggeado$ = new BehaviorSubject<boolean>(this.logged);
  
  constructor(private http: HttpClient) {
   }
  
  LogIn(){
    this.loggeado$.next(true);
  }
  
  LogOut(){
    this.loggeado$.next(false);
  }
  
  LogState() {
    return this.loggeado$.asObservable();
  }
 
    
}
