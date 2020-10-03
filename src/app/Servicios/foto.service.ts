import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../Modelos/pokemon';
import { Resultado } from '../Modelos/resultado';


@Injectable({
  providedIn: 'root'
})
export class FotoService {

  datos2: any[] = []

  constructor(private http:HttpClient) { 

  }



  leerPokemones(): Observable<Pokemon[]>
  {

    return this.http.get<Pokemon[]>('https://pokeapi.co/api/v2/pokemon?limit=30&offset=0')
  }



  // leerruta(enlace: string): Observable<Resultado>
  // {

  //   return this.http.get<Resultado>(enlace)
  // }


  
}



