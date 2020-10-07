import { Component, OnInit } from '@angular/core';
import { FotoService } from '../Servicios/foto.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  valor: String;

  constructor(private fotoInyectada: FotoService) { 
    this.valor = this.fotoInyectada.a
  }

  ngOnInit(): void {
  }

}
