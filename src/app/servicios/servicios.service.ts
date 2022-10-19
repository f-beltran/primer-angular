import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Tabla} from "../modelo/tabla";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http: HttpClient) { }
  obtenerServicios(): Observable<Tabla>{
    return this.http.get<Tabla>('assets/servicios.json')
  }
}
