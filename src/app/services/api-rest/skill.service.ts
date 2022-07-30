import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  
  
  url: string = "https://warm-cove-79673.herokuapp.com/api";
  
 
  
  constructor(private http: HttpClient) {}

  getById(id: number): Observable<any> {
	  return this.http.get(this.url + `/skills/${id}`);
	}
  getAll(): Observable<any> {
    console.log("pasa por getAll?")
	  return this.http.get(this.url+'/skills');
	}
  
  update(id: number, skill: any): Observable<any>{
    return this.http.put(this.url + `/skills/${id}`, skill);
  }


  delete(id: number): Observable<any>{
    return this.http.delete(this.url + `/skills/${id}`);
  }
 save(skill:any) : Observable<any>{
   return this.http.post(this.url + `/skills/`, skill);
 }
}
