import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ServiciosService} from "../../servicios/servicios.service";
import {DetalleServicio} from "../../modelo/detalle-servicio";

@Component({
  selector: 'app-servicio-detalle',
  templateUrl: './servicio-detalle.component.html',
  styleUrls: ['./servicio-detalle.component.scss']
})
export class ServicioDetalleComponent implements OnInit {
  detalleServicio: DetalleServicio | undefined;
  constructor(private route: ActivatedRoute, private serviciosService: ServiciosService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (data) => {
        this.serviciosService.obtenerDetalle(data.get('id')).subscribe(
          data => this.detalleServicio = data
        )
      }
    )
  }

}
