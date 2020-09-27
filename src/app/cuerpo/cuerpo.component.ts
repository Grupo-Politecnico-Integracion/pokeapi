import { Component, OnInit } from '@angular/core';
import { FotoService } from '../Servicios/foto.service';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.scss']
})
export class CuerpoComponent implements OnInit {

  constructor( public FotoInyectado:FotoService ) { }

  ngOnInit(): void {

    this.FotoInyectado.pokemon.results.name = this.FotoInyectado.pokemon.results.name;
  }

}
