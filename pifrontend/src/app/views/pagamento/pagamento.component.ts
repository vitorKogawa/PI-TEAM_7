import { Component, OnInit } from '@angular/core';

//icons
import { faCreditCard, faUserCircle, faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import { faBarcode } from "@fortawesome/free-solid-svg-icons"
import { IPagamento } from 'src/app/models/IPagamento';


@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {
  constructor() { }

  faCreditCard = faCreditCard;
  faUserCircle = faUserCircle;
  faCalendarAlt = faCalendarAlt;
  faBarcode = faBarcode;

  numeroBoleto: string = "34191.79001 01043.510047 91020.150008 7 86160026000";
  parcelas: Array<{ value: number }> = [
    {
      value: 1
    },
    {
      value: 2
    },
    {
      value: 3
    },
    {
      value: 4
    },
    {
      value: 5
    },
  ]

  numeroCartao: string = "";

  ngOnInit(): void {
  }

  showNumeroCartao(): void {
    console.log(this.numeroCartao);
  }
}
