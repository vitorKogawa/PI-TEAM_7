import { IJogo } from './../../../../models/IJogo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-game',
  templateUrl: './featured-game.component.html',
  styleUrls: ['./featured-game.component.css']
})
export class FeaturedGameComponent implements OnInit {

  game: IJogo = {
    nome: 'Resident Evil Village',
    preco: 200,

  }

  imageUrl: string = "https://coletivonerd.com.br/wp-content/uploads/2021/01/4021309.png"
  constructor() { }

  ngOnInit(): void {
  }

}
