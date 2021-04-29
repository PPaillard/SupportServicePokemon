import { Injectable } from '@angular/core';
import { Cards } from './common/Cards.model';
import { PokemonService } from './pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class CardFactoryService {

  listeCartes : Cards[] = []

  constructor(private service: PokemonService) { }

  // on va chercher les data pokemons
  // on les convertis en Cards
  getDataFromPokemon():void{
    this.service.getData().subscribe(reponse=>{
      reponse.cards.forEach(element => {
        // pour chaque carte contenu dans le tableau cards
        // Je l'ajoute à la liste
        this.listeCartes.push(new Cards(element.id, element.name, element.imageUrl))
      });

    })
  }
  // on renvoi la liste de Cards
  getCards(): Cards[]{
    return this.listeCartes
  }

}
