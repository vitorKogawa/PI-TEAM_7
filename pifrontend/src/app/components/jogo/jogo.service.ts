import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Jogo } from './jogo.model';

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
  create(jogo: Jogo):Observable<Jogo> {
    return this.http.post<Jogo>(this.baseUrl, jogo)
  }
  
  //filtrando o jogo
  read(): Observable<Jogo[]>{
    return this.http.get<Jogo[]>(this.baseUrl)
  }

  //buscando por id
  readById(id: string): Observable<Jogo> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Jogo>(url)
  }

  //alteração do jogo
  update(jogo:Jogo): Observable<Jogo> {
    const url = `${this.baseUrl}/${jogo.id}`
    return this.http.put<Jogo>(url, jogo)
  }

}
