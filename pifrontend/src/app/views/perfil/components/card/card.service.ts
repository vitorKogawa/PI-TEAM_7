import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUsuario } from 'src/app/models/IUsuario';

const baseUrl = 'http://localhost:3333/pagamento/usuario';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private http: HttpClient) {}

  get(id: number): Observable<IUsuario> {
    return this.http.get(`${baseUrl}/${id}`);
  }
}
