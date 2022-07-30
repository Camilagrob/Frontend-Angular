import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
 
 
  url: string = "https://warm-cove-79673.herokuapp.com/api";
  
  
  constructor(private http: HttpClient) {}

  getById(id: number): Observable<any> {
	  return this.http.get(this.url + `/laboral/${id}`);
	}
  getAll(): Observable<any> {
    console.log("pasa por getAll?")
	  return this.http.get(this.url+'/laboral');
	}
  
  update(id: number, experiencia: any): Observable<any>{
    return this.http.put(this.url + `/laboral/${id}`, experiencia);
  }

  
  delete(id: number): Observable<any>{
    return this.http.delete(this.url + `/laboral/${id}`);
  }
 save(experiencia:any) : Observable<any>{
   return this.http.post(this.url + `/laboral/`, experiencia);
 }
 
}
