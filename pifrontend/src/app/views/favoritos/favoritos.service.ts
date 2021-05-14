import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFavorito } from 'src/app/models/IFavorito';


@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  constructor(private httpClient: HttpClient) { }

  baseUrl: string = "http://localhost:3333/favoritos"

  create(favorito: IFavorito): Observable<IFavorito>{
    return this.httpClient.post<IFavorito>(this.baseUrl, favorito);
  }

  remover(id: string): Observable<boolean>{
    return this.httpClient.delete<boolean>(`${this.baseUrl}/${id}`);
  }

  findAll(userId: string): Observable<IFavorito[]>{
    return this.httpClient.get<IFavorito[]>(`${this.baseUrl}/${userId}`);
  }
}
