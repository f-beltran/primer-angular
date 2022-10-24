import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Tabla} from "../modelo/tabla";
import {Observable} from "rxjs";
import {DetalleServicio} from "../modelo/detalle-servicio";

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http: HttpClient) { }
  obtenerServicios(): Observable<Tabla>{
    return this.http.get<Tabla>('assets/servicios.json')
  }
  obtenerDetalle( id: string | null): Observable<DetalleServicio>{
    return this.http.get<DetalleServicio>('assets/servicio.json')
  }
}
