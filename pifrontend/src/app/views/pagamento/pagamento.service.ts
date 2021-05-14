import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin } from 'src/app/models/ILogin';
import { IPagamento } from 'src/app/models/IPagamento';

@Injectable({
  providedIn: 'root',
})
export class PagamentoService implements OnInit{

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
  }

  baseUrl: string = 'http://localhost:3333/pagamento';

  create(pagamento: IPagamento): Observable<IPagamento> {
    return this.httpClient.post<IPagamento>(this.baseUrl, pagamento);
  }

  read(): Observable<IPagamento[]> {
    return this.httpClient.get<IPagamento[]>(this.baseUrl);
  }

  readUser(userId: number): Observable<IPagamento[]> {
    return this.httpClient.get<IPagamento[]>(`${this.baseUrl}/usuario/${userId}`);
  }

  aprovarPagamento(id: string | null): Observable<boolean> {
    return this.httpClient.put<boolean>(`${this.baseUrl}/${id}`, {});
  }
}
