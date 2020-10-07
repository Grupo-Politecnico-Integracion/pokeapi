import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FotoService } from '../Servicios/foto.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {

  frase: string = '';

  constructor(private fotoInyectada: FotoService, private Ruta: Router) { 

    
  }

  ngOnInit(): void {
  }



  buscar(){

   

   this.fotoInyectada.a = this.frase;
  this.Ruta.navigateByUrl('/busqueda');

   
  }

}
