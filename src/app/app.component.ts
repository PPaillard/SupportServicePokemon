import { Component, OnInit } from '@angular/core';
import { CardFactoryService } from './card-factory.service';
import { Cards } from './common/Cards.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  listeCartes : Cards[] = []

  constructor(private service : CardFactoryService) {}

  ngOnInit(): void {
    // On demande de remplir la liste de carte
    this.service.getDataFromPokemon()
    // on va chercher la liste de carte
    this.listeCartes = this.service.getCards()
  }

}
