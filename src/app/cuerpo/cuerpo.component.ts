import { Component, OnInit } from '@angular/core';
import { FotoService } from '../Servicios/foto.service';





@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.scss']
})

export class CuerpoComponent implements OnInit {

  constructor( private fotoService: FotoService ) { }

  ngOnInit(): void {

  this.fotoService.pokemon.name = this.fotoService.pokemon.name;
    
  }

}
