import { Component, OnInit } from '@angular/core';
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

  pokearray: Array<Resultado> = new Array<Resultado>();

  constructor(private fotoInyectada: FotoService) { }

  ngOnInit(): void {

   this.fotoInyectada.leerPokemones().subscribe((pokemonDesdeApi)=>{
    this.poke = pokemonDesdeApi; 
   })
  
  
  }


  leerarreglo(){

    
  }

}
