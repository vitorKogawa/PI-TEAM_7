import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPagamento } from 'src/app/models/IPagamento';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  constructor(private httpClient: HttpClient) { }

  baseUrl: string = "http://localhost:3333/pagamento";

  create(pagamento: IPagamento): Observable<IPagamento>{
    return this.httpClient.post<IPagamento>(this.baseUrl, pagamento);
  }

  read(): Observable<IPagamento[]>{
    return this.httpClient.get<IPagamento[]>(this.baseUrl);
  }

  aprovarPagamento(id: string | null){
    this.httpClient.put(`${this.baseUrl}/aprovar/${id}`, {});
  }
}
