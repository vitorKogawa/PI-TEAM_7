import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Jogo } from './jogo.model';

@Injectable({
  providedIn: 'root'
})
export class JogoService {
  baseUrl = 'http://127.0.0.1:3333'

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
  create(jogo: Jogo):Observable<Jogo> {
    return this.http.post<Jogo>(this.baseUrl, jogo)
  }

}
