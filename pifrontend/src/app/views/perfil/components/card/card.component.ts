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
  }

  jogos: Array<any> = [];
  
  BuscarJogosUsuario(id: number): void {
    this.cardService.get(id).subscribe(
      (data) => {
        this.jogos = data[0]
        console.log(this.jogos)
      },
      (error) => console.log(error)
    )
  }

  PegarToken(): any{
    var token = sessionStorage.getItem('token')

    if(token != null)
      return JSON.parse(token).user.id
  }

}
