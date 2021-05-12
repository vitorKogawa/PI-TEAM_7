import { Component, OnInit } from '@angular/core';
import { JogoService } from '../jogo.service';
import { Router } from '@angular/router'
import { Jogo } from '../jogo.model';


@Component({
  selector: 'app-jogo-create',
  templateUrl: './jogo-create.component.html',
  styleUrls: ['./jogo-create.component.css']
})
export class JogoCreateComponent implements OnInit {


  jogo: Jogo = {
    id: NaN,
    nome: '',
    preco: NaN,
    quantidade: NaN,
    descricao: '',
    cod_genero: '',
    espaco_arm: NaN,
  }

  constructor(private jogoService: JogoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createJogo():void{
    this.jogoService.create(this.jogo).subscribe(() => {
      this.jogoService.showMessage('Jogo cadastrado com sucesso!')
      this.router.navigate(["/jogos"])
    })
  }

  cancel():void{
    this.router.navigate(["/jogos"])  

  }

}

