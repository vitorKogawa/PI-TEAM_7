import { Component, OnInit } from '@angular/core';

//icons
import { faCreditCard, faUserCircle, faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import { faBarcode } from "@fortawesome/free-solid-svg-icons"


@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {
  faCreditCard = faCreditCard;
  faUserCircle = faUserCircle;
  faCalendarAlt = faCalendarAlt;
  faBarcode = faBarcode;

  numeroBoleto: string = "34191.79001 01043.510047 91020.150008 7 86160026000";

  constructor() { }

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

  ngOnInit(): void {
  }
}
