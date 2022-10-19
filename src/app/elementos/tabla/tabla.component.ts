import {Component, Input, OnInit} from '@angular/core';
import {Tabla} from "../../modelo/tabla";

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {
  @Input() datos: Tabla | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
