import { Component, OnInit } from '@angular/core';
import { Detalle } from '../Modelos/detalle';
import { Habilidades } from '../Modelos/Habilidades/habilidades';
import { FotoService } from '../Servicios/foto.service';

@Component({
  selector: 'app-especificacion',
  templateUrl: './especificacion.component.html',
  styleUrls: ['./especificacion.component.scss']
})
export class EspecificacionComponent implements OnInit {

  detalle: Detalle = new Detalle();
  datos: any[] = []
  datos2: any[] = []
  habilidad: Array<Habilidades> = new Array<Habilidades>();

 

  constructor(private fotoInyectada: FotoService) { 
    this.datos = this.fotoInyectada.datos2
  }

  ngOnInit(): void {

    this.fotoInyectada.leerEspecificacion(this.datos['Id']).subscribe((detalleDesdeApi)=>{
 
       this.detalle = detalleDesdeApi;
       this.detalle.Id = this.datos['Id'];
      this.habilidad = this.detalle.abilities;

    
    //   this.habilidad.forEach( valores =>{

        
   
    //    this.datos2.push({
   
    //      name: valores.ability.name,
    //      url: valores.ability.url,
        
    //    })
   
   
    //  })
      
    })
   
  }

}
