import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../Modelos/pokemon';


@Injectable({
  providedIn: 'root'
})
export class FotoService {

  // pokemon: Pokemon = new Pokemon();

  constructor(private http:HttpClient) { 

  }


  // leerPokemones(): Observable<Pokemon>
  // {

  //   return this.http.get<Pokemon>('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
  // }


  leerPokemones(): Observable<Pokemon[]>
  {

    return this.http.get<Pokemon[]>('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
  }


  
}
