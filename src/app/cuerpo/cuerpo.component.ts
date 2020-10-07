import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../Modelos/pokemon';
import { Resultado } from '../Modelos/resultado';
import { FotoService } from '../Servicios/foto.service';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.scss']
})

export class CuerpoComponent implements OnInit {

  poke: Pokemon = new Pokemon();
  // poke: Resultado = new Resultado();

  pokearray: Resultado = new Resultado();
  pokearray2: Array<Pokemon> = new Array<Pokemon>();
  pokearray3: Array<Resultado> = new Array<Resultado>();

  datos: any[] = []
  datos2: any[] = []
  datos3: any[] = []
  datos4: any[] = []

  nombre: String;

  constructor(private fotoInyectada: FotoService, private Ruta: Router) { }

  ngOnInit(): void {

   this.fotoInyectada.leerPokemones().subscribe((pokemonDesdeApi)=>{
    this.pokearray2 = pokemonDesdeApi;  
    this.datos = this.pokearray2['results'];
    this.datos3 = this.arregloId();
   })

  }


  arregloId(){

  var idfoto: number = 0;

  this.datos.forEach( valores =>{

     idfoto++;

    this.datos2.push({

      name: valores.name,
      url: valores.url,
      Id: idfoto


    })


  })
  return this.datos2
    
 }



 irAEspecificacion(p:any[]){

  this.fotoInyectada.datos2 = p;
  this.Ruta.navigateByUrl('/especificacion');

 }

}
