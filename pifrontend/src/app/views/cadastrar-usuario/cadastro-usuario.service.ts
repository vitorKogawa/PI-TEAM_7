import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { JogoService } from 'src/app/components/jogo/jogo.service';

const baseUrl = 'http://localhost:3333/usuario';

@Injectable({
  providedIn: 'root',
})
export class CadastroUsuarioService {
  constructor(private http: HttpClient) {}

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
}
