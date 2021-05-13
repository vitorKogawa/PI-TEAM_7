import { Component, OnInit } from '@angular/core';
import { IJogo } from '../../../models/IJogo';
import { JogoService } from '../jogo.service';

@Component({
  selector: 'app-jogo-read',
  templateUrl: './jogo-read.component.html',
  styleUrls: ['./jogo-read.component.css'],
})
export class JogoReadComponent implements OnInit {
  jogos: IJogo[] = [];

  displayedColumns = ['id', 'nome', 'preco', 'espaco_arm', 'genero', 'action'];

  constructor(private jogoService: JogoService) {}

  ngOnInit(): void {
    this.jogoService.read().subscribe((jogos) => {
      this.jogos = jogos;
    });
  }
}
