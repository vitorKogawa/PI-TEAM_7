import { Component, OnInit } from '@angular/core';
import { ILogin } from 'src/app/models/ILogin';
import { IPagamento } from 'src/app/models/IPagamento';
import { PagamentoService } from '../pagamento/pagamento.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
})
export class PedidosComponent implements OnInit {
  constructor(private pagamentoService: PagamentoService) {}
  pagamentos: any = [];

  displayedColumns = [
    'id',
    'username',
    'game',
    'descricao',
    'price',
    'status',
    'action',
  ];

  userId: number = 0;
  status_adm: boolean = false;

  ngOnInit(): void {
    const json = JSON.parse(String(sessionStorage.getItem('token'))) as ILogin;
    this.userId = json.user.id;
    this.status_adm = json.user.status_adm;

    if(!this.status_adm)
      this.displayedColumns.pop()

    if (json.user.status_adm) {
      this.pagamentoService.read().subscribe((pagamentos) => {
        this.pagamentos = pagamentos[0];
      });
    } else {
      this.pagamentoService.readUser(json.user.id).subscribe((pagamentos) => {
        this.pagamentos = pagamentos[0];
      });
    }
  }

  aprovarPagamento(id: string | null) {
    this.pagamentoService
      .aprovarPagamento(id)
      .subscribe((data) => alert('Pagamento aprovado com sucesso.'));

    window.location.reload();
  }
}
