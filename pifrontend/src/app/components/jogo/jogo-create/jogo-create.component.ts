import { Component, OnInit } from '@angular/core';
import { JogoService } from '../jogo.service';
import { Router } from '@angular/router';
import { IJogo } from '../../../models/IJogo';
// import Swal from 'sweetalert2'

@Component({
  selector: 'app-jogo-create',
  templateUrl: './jogo-create.component.html',
  styleUrls: ['./jogo-create.component.css'],
})
export class JogoCreateComponent implements OnInit {
  jogo: IJogo = {
    nome: '',
    preco: 0,
    descricao: '',
    espaco_arm: 0,
    genero: '',
    status: true,
    imageUrl: '',
  };

  constructor(private jogoService: JogoService, private router: Router) {}

  ngOnInit(): void {}

  createJogo(): void {
    console.log(this.jogo);

    this.jogoService.create(this.jogo).subscribe(() => {
      this.jogoService.showMessage('Jogo cadastrado com sucesso!');
      this.router.navigate(['/jogos']);
    });
  }

  cancel(): void {
    this.router.navigate(['/jogos']);
  }
}
