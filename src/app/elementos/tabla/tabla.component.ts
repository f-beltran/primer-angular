import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Tabla} from "../../modelo/tabla";

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {
  @Input() datos: Tabla | undefined;
  @Output() clic = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {

  }
  enviarId(fila: any){
    console.log(fila)
    console.log(fila[0])
    this.clic.emit(fila[0])
  }
}
