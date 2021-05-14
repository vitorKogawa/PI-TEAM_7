import { Component, OnInit } from '@angular/core';
import { ILogin } from 'src/app/models/ILogin';
import { PagamentoService } from '../pagamento/pagamento.service';

@Component({
  selector: 'app-meus-jogos',
  templateUrl: './meus-jogos.component.html',
  styleUrls: ['./meus-jogos.component.css']
})
export class MeusJogosComponent implements OnInit {

  constructor(private pagamentoService: PagamentoService) { }

  jogos: any = []

  ngOnInit(): void {
    const json = JSON.parse(String(sessionStorage.getItem('token'))) as ILogin
    this.pagamentoService.readUser(json.user.id).subscribe(jogos => {
      console.log(jogos)
      this.jogos = jogos[0];
    })
  }
}
