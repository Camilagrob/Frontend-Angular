import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url: string = "https://warm-cove-79673.herokuapp.com/api";
  
 
  
  constructor(private http: HttpClient) {}

  getById(id: number): Observable<any> {
	  return this.http.get(this.url + `/personas/${id}`);
	}
  getAll(): Observable<any> {
    console.log("pasa por getAll?")
	  return this.http.get(this.url+'/personas');
	}

  update(id: number, persona: any): Observable<any>{
    return this.http.put(this.url + `/personas/${id}`, persona);
  }

  delete(id: number): Observable<any>{
    return this.http.delete(this.url + `/personas/${id}`);
  }
 save(persona:any) : Observable<any>{
   return this.http.post(this.url + `/personas/`, persona);
 }


}
