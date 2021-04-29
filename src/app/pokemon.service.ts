import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  // url de l'API
  url : string = "https://api.pokemontcg.io/v1/cards"

  constructor(private http: HttpClient) {  }

  // on va chercher les données.
  getData(): Observable<any> {
    return this.http.get(this.url)
  }
}
