import { Component, OnInit } from '@angular/core';
import { convertToObject } from 'typescript';
import { CardService } from './card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.BuscarJogosUsuario(this.PegarToken());
    console.log(this.jogos)
  }

  ListaCodigoJogos = [];
  jogos: Array<any> = [];
  
  BuscarJogosUsuario(id: number): void {
    this.cardService.get(id).subscribe(
      (data) => {
        this.ListaCodigoJogos = data.map((e:any) => {
          this.BuscarJogo(e.cod_jogo);
          return e.cod_jogo
        });
      },
      (error) => console.log(error)
    )
  }

  PegarToken(): any{
    var token = sessionStorage.getItem('token')

    if(token != null)
      return JSON.parse(token).user.id
  }

  BuscarJogo(id: number): void{
    this.cardService.getJogo(id).subscribe(
      (data) => {
        this.FormatarArrayJogos(data)
      },
      (error) => console.log(error)
    )
  }

  FormatarArrayJogos(jogo: any): void{
    this.jogos[jogo.id] = jogo
  }

}
