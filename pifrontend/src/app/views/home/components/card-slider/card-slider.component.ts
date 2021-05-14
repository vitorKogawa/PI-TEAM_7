import { IFavorito } from './../../../../models/IFavorito';
import { FavoritosService } from './../../../favoritos/favoritos.service';
import { Component, OnInit } from '@angular/core';
import { JogoService } from 'src/app/components/jogo/jogo.service';
import { IJogo } from 'src/app/models/IJogo';
import { ILogin } from 'src/app/models/ILogin';
import { PagamentoService } from 'src/app/views/pagamento/pagamento.service';
import { IPagamento } from 'src/app/models/IPagamento';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.css']
})
export class CardSliderComponent implements OnInit {
  constructor(private jogoService: JogoService, private favoritoService: FavoritosService, private pagamentoService: PagamentoService) { }

  jogos: Array<IJogo> = [];

  favorito: IFavorito = {
    cod_jogo: '',
    cod_usuario: ''
  };

  userId: string = '';

  ngOnInit(): void {
    this.getAll();

    const json = JSON.parse(String(sessionStorage.getItem('token'))) as ILogin;
    const userId = json.user.id;
    this.userId = String(json.user.id);

    this.favorito.cod_usuario = String(userId);
  }

  getAll(): void{
    this.jogoService.readEnable().subscribe(jogos => {
      console.log(jogos);
      this.jogos = jogos;
    });
  }

  adicionarFavorito(jogoId: string | undefined){
    this.favorito.cod_jogo = jogoId;

    console.log(this.favorito);
    this.favoritoService.create(this.favorito).subscribe(() => this.jogoService.showMessage("Jogo adicionado aos favoritos!"))
  }

  comprar(jogoId: string | undefined){
    const pagamento: IPagamento = {
      cod_jogo: jogoId,
      cod_usuario: this.userId,
      cod_tipo_pagamento: '1'
    }

    console.log(pagamento)

    this.pagamentoService.create(pagamento).subscribe(() => this.jogoService.showMessage("Pedido realizado com sucesso!"))
  }
}
