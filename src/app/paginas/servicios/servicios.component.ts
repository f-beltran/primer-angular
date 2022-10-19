import { Component, OnInit } from '@angular/core';
import {ServiciosService} from "../../servicios/servicios.service";
import {Tabla} from "../../modelo/tabla";

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {
  tabla: Tabla | undefined;
  constructor( private serviciosService: ServiciosService) { }

  ngOnInit(): void {
    this.serviciosService.obtenerServicios().subscribe(
      data => this.tabla = data
    )
  }

}
