import { Component, OnInit } from '@angular/core';
import { JogoService } from 'src/app/components/jogo/jogo.service';
import { IFavorito } from 'src/app/models/IFavorito';
import { ILogin } from 'src/app/models/ILogin';
import { FavoritosService } from './favoritos.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css'],
})
export class FavoritosComponent implements OnInit {
  constructor(private favoritoService: FavoritosService, private jogoService: JogoService) {}

  favoritos: any = [];

  displayedColumns = ['game', 'genero', 'preco', 'action'];

  ngOnInit(): void {
    const json = JSON.parse(String(sessionStorage.getItem('token'))) as ILogin;
    const userId = json.user.id;

    this.favoritoService.findAll(String(userId)).subscribe(favoritos => this.favoritos = favoritos[0]);
  }

  remover(id: string) {
    this.favoritoService
      .remover(id)
      .subscribe(() => this.jogoService.showMessage('Jogo removido dos favoritos!'));

    window.location.reload();
  }
}
