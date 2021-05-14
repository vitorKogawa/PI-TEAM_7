import { Component, OnInit } from '@angular/core';
import { JogoService } from '../jogo.service';
import { Router } from '@angular/router';
import { IJogo } from '../../../models/IJogo';

@Component({
  selector: 'app-jogo-create',
  templateUrl: './jogo-create.component.html',
  styleUrls: ['./jogo-create.component.css'],
})
export class JogoCreateComponent implements OnInit {
  constructor() {}

  jogo = {
    nome: '',
    preco: 0,
    descricao: '',
    genero: '',
    espaco_arm: 0,
    status: false,
  }

  // file: Set<File>;

  ngOnInit(): void {

  }

  onChange(event: Event){
    console.log(event)
    // const selectedFiles
  }

  create(){

  }
}
