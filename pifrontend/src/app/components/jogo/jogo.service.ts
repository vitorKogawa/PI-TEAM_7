import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { IJogo } from './jogo.model';

@Injectable({
  providedIn: 'root'
})
export class JogoService {
  baseUrl = 'http://localhost:3000/jogos'

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(msg:string):void {
    this.snackBar.open(msg,'X',{
      duration:3000,
      horizontalPosition:'right',
      verticalPosition:'top' 
    })

    
  }
  //conexao com o backend
  //cadastro do jogo
  create(jogo: IJogo):Observable<IJogo> {
    return this.http.post<IJogo>(this.baseUrl, jogo);
  }
  
  //filtrando o jogo
  read(): Observable<IJogo[]>{
    return this.http.get<IJogo[]>(this.baseUrl);
  }

  //buscando por id
  readById(id: string | null): Observable<IJogo> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<IJogo>(url);
  }

  //alteração do jogo
  update(jogo:IJogo): Observable<IJogo> {
    const url = `${this.baseUrl}/${jogo.id}`
    return this.http.put<IJogo>(url, jogo);
  }

  //deletando jogo
  delete(id: string | undefined):Observable<IJogo> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<IJogo>(url);
  }
}
