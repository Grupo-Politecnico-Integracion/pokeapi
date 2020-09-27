import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../Modelos/pokemon';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  pokemon: Pokemon = new Pokemon();

  constructor(private http:HttpClient) { 

    // this.pokemon.results.name = "Primer poke"
    // this.pokemon.results.name = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/204.png'
  
  }
}
