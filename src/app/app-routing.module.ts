import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./paginas/inicio/inicio.component";
import {ServiciosComponent} from "./paginas/servicios/servicios.component";
import {TrabajosComponent} from "./paginas/trabajos/trabajos.component";
import {EquipoComponent} from "./paginas/equipo/equipo.component";
import {PaginaNoEncontradaComponent} from "./paginas/pagina-no-encontrada/pagina-no-encontrada.component";
import {ServicioDetalleComponent} from "./paginas/servicio-detalle/servicio-detalle.component";

const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'servicios', component: ServiciosComponent },
  { path: 'servicios/:id', component: ServicioDetalleComponent },
  { path: 'trabajos', component: TrabajosComponent },
  { path: 'equipo', component: EquipoComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', component: PaginaNoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
