import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuario } from 'src/app/models/IUsuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private httpClient: HttpClient) { }

  baseUrl: string = "http://localhost:3333/usuario";

  findAll(): Observable<IUsuario[]>{
    return this.httpClient.get<IUsuario[]>(this.baseUrl);
  }

  findById(userId: number): Observable<IUsuario>{
    return this.httpClient.get<IUsuario>(`${this.baseUrl}/${userId}`);
  }

  disableByID(userId: number): Observable<boolean>{
    return this.httpClient.put<boolean>(`${this.baseUrl}/disable/${userId}`, {});
  }
}
