import { Component, OnInit } from '@angular/core';
import { CardService } from './card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.BuscarJogosUsuario(1)
  }

  BuscarJogosUsuario(id: number): void {
    this.cardService.get(id).subscribe(
      (data) => {
        console.log(data)
      },
      (error) => console.log(error)
    )
  }

}
