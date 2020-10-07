import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Detalle } from '../Modelos/detalle';
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

    return this.http.get<Pokemon[]>('https://pokeapi.co/api/v2/pokemon?limit=102&offset=0')
  }



  leerEspecificacion(id: number): Observable<Detalle>
  {

    return this.http.get<Detalle>('https://pokeapi.co/api/v2/pokemon/' + id)
  }


  
}



