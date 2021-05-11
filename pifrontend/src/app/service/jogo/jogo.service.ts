import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IJogo } from 'src/app/models/IJogo';
@Injectable({
  providedIn: 'root',
})
export class JogoService {
  constructor(private httpClient: HttpClient) {}

  baseUrl: string = 'http://localhost:3333/jogo';

  create(jogo: IJogo): Observable<IJogo> {
    return this.httpClient.post<IJogo>(this.baseUrl, jogo);
  }

  findAll(): Observable<IJogo[]> {
    return this.httpClient.get<IJogo[]>(this.baseUrl);
  }
}
