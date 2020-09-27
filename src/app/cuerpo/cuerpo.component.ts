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

  // poke: Pokemon = new Pokemon();
  poke: Resultado = new Resultado();

  pokearray: Resultado = new Resultado();
  pokearray2: Array<Pokemon> = new Array<Pokemon>();
  pokearray3: Array<Resultado> = new Array<Resultado>();

  datos: any[] = []

  nombre: String;

  constructor(private fotoInyectada: FotoService) { }

  ngOnInit(): void {

   this.fotoInyectada.leerPokemones().subscribe((pokemonDesdeApi)=>{
    this.pokearray2 = pokemonDesdeApi; 

   })

  }


  leerarreglo(){
    return this.datos = this.pokearray2['results'];
    
  }

}
