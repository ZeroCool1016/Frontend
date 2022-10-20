import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ObtenerRolService {
  urlBase='http://127.0.0.1:8000/api/'


  constructor(
    private http: HttpClient
    ) { }

  
obtenerRol(): Observable<any>{
  return this.http.get(this.urlBase+'permisosRoles').pipe(map (rest =>{
    return rest;
  }));
}
}
