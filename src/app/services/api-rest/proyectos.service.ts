import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  url: string = "https://warm-cove-79673.herokuapp.com/api";
  
  
  
  constructor(private http: HttpClient) {}

  getById(id: number): Observable<any> {
	  return this.http.get(this.url + `/proyectos/${id}`);
	}
  getAll(): Observable<any> {
    console.log("pasa por getAll?")
	  return this.http.get(this.url+'/proyectos');
	}

  update(id: number, proyecto: any): Observable<any>{
    return this.http.put(this.url + `/proyectos/${id}`, proyecto);
  }


  delete(id: number): Observable<any>{
    return this.http.delete(this.url + `/proyectos/${id}`);
  }
 save(proyecto:any) : Observable<any>{
   return this.http.post(this.url + `/proyectos/`, proyecto);
 }
}
