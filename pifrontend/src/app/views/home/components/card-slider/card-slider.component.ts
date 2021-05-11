import { Component, OnInit } from '@angular/core';
import { JogoService } from 'src/app/service/jogo/jogo.service';
import { IJogo } from 'src/app/models/IJogo';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.css']
})
export class CardSliderComponent implements OnInit {
  constructor(private jogoService: JogoService) { }

  jogos: Array<IJogo> = [];

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void{
    this.jogoService.findAll().subscribe(jogos => {
      console.log(jogos);
      this.jogos = jogos;
    });
  }
}
