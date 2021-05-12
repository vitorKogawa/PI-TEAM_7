import { IJogo } from './../../../../models/IJogo';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-featured-game',
  templateUrl: './featured-game.component.html',
  styleUrls: ['./featured-game.component.css']
})
export class FeaturedGameComponent implements OnInit {

  game: IJogo = {
    nome: 'The Last Of Us II',
    preco: 200,
    
  }
  imageUrl: string = "https://evilhazard.com.br/wp-content/uploads/2020/02/tlouThe-last-of-us-part-II.jpg"
  
  constructor() { }

  ngOnInit(): void {
 }

}
