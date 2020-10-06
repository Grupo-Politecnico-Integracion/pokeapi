import { Component, OnInit } from '@angular/core';
import { Detalle } from '../Modelos/detalle';
import { FotoService } from '../Servicios/foto.service';

@Component({
  selector: 'app-especificacion',
  templateUrl: './especificacion.component.html',
  styleUrls: ['./especificacion.component.scss']
})
export class EspecificacionComponent implements OnInit {

  detalle: Detalle = new Detalle();
  datos: any[] = []

  constructor(private fotoInyectada: FotoService) { 
    this.datos = this.fotoInyectada.datos2
  }

  ngOnInit(): void {

    this.fotoInyectada.leerEspecificacion(this.datos['Id']).subscribe((detalleDesdeApi)=>{
 

      this.detalle = detalleDesdeApi;

    })
   
  }

}
