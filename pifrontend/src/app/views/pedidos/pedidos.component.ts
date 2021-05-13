import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    this.pagamentoService.read().subscribe((pagamentos) => {
      console.log(pagamentos[0]);
      this.pagamentos = pagamentos[0];
    });
  }

  aprovarPagamento(id: string | null) {
    console.log('PAREI AQUI........');
    // this.pagamentoService
    //   .aprovarPagamento(id)
    //   .subscribe((data) => console.log(data));
  }
}
