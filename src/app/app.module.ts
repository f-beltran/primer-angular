import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ServiciosComponent } from './paginas/servicios/servicios.component';
import { TrabajosComponent } from './paginas/trabajos/trabajos.component';
import { EquipoComponent } from './paginas/equipo/equipo.component';
import { PaginaNoEncontradaComponent } from './paginas/pagina-no-encontrada/pagina-no-encontrada.component';
import { TablaComponent } from './elementos/tabla/tabla.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ServiciosComponent,
    TrabajosComponent,
    EquipoComponent,
    PaginaNoEncontradaComponent,
    TablaComponent
  ],
  exports: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
