import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Tabla} from "../modelo/tabla";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TrabajosService {

  constructor( private http: HttpClient) { }

  obtenerTrabajos(): Observable<Tabla>{
    return this.http.get<Tabla>('assets/trabajos.json')
  }

}
