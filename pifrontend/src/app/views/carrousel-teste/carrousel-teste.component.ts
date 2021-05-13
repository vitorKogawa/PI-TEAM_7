import { Component } from '@angular/core';
import { JogoService } from 'src/app/components/jogo/jogo.service';
import { IJogo } from 'src/app/models/IJogo';


@Component({
  selector: 'app-carrousel-teste',
  templateUrl: 'carrousel-teste.component.html',
  styleUrls: ['carrousel-teste.component.css'],

})
export class CarrouselTesteComponent {
  constructor(private jogoService: JogoService) { }

  jogos: Array<IJogo> = [];

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void{
    this.jogoService.read().subscribe(jogos => {
      console.log(jogos);
      this.jogos = jogos;
    });
  }
}
