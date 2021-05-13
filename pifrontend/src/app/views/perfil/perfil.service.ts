import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUsuario } from 'src/app/models/IUsuario';

const baseUrl = 'http://localhost:3333/usuario';

@Injectable({
  providedIn: 'root',
})
export class PerfilService {
  constructor(private http: HttpClient) {}

  get(id: number): Observable<IUsuario> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  update(id: any, data:any): Observable<any> {
      return this.http.put(`${baseUrl}/${id}`, data)
  }
}
