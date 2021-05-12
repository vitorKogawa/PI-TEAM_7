import { Component, OnInit } from '@angular/core';
import { Jogo } from '../jogo.model';
import { JogoService } from '../jogo.service';


@Component({
  selector: 'app-jogo-read',
  templateUrl: './jogo-read.component.html',
  styleUrls: ['./jogo-read.component.css']
})
export class JogoReadComponent implements OnInit {

  jogos!: Jogo[]
  displayedColumns = ['id', 'nome', 'preco','quantidade','cod_genero','espaco_arm','update','delete']

  constructor(private jogoService: JogoService) { }

  ngOnInit(): void {
    this.jogoService.read().subscribe(jogos => {
      this.jogos = jogos
      console.log(jogos)
    })

  }

}


