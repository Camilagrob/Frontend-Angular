import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "https://warm-cove-79673.herokuapp.com/api";
  

  user: User = { username: "", password: "", token: "" };

  constructor(private http: HttpClient) {

  } 

  login(username: string, password: string): Observable<any> {  
    this.user.username = username;
    this.user.password = password;
    return this.http.post(`https://warm-cove-79673.herokuapp.com/api/login`, this.user);
    
	}

  
}
