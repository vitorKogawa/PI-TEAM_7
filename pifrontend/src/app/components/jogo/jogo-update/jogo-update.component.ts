import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IJogo } from '../../../models/IJogo';
import { JogoService } from '../jogo.service';

@Component({
  selector: 'app-jogo-update',
  templateUrl: './jogo-update.component.html',
  styleUrls: ['./jogo-update.component.css'],
})
export class JogoUpdateComponent implements OnInit {
  jogo: IJogo = {
    nome: '',
    preco: 0,
    status: false
  };

  constructor(
    private jogoService: JogoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.jogoService.readById(id).subscribe((jogo) => {
      this.jogo = jogo;
    });
  }

  updateJogo(): void {
    this.jogoService.update(this.jogo).subscribe(() => {
      this.jogoService.showMessage('Jogo atualizado com sucesso!');
      this.router.navigate(['/home']);
    });
  }

  cancel(): void {
    this.router.navigate(['/jogos']);
  }
}
