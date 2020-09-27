import { Injectable } from '@angular/core';
import { Pokemon } from '../Modelos/pokemon';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  pokemon: Pokemon = new Pokemon

  constructor() { 
    this.pokemon.name = "Primer poke"
    this.pokemon.url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/204.png'
  }
}
