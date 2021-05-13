import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { IJogo } from './../../models/IJogo';

@Injectable({
  providedIn: 'root',
})
export class JogoService {
  baseUrl = 'http://localhost:3333/jogo';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
  create(jogo: IJogo): Observable<IJogo> {
    return this.http.post<IJogo>(this.baseUrl, jogo);
  }

  read(): Observable<IJogo[]> {
    return this.http.get<IJogo[]>(this.baseUrl);
  }

  readById(id: string | null): Observable<IJogo> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<IJogo>(url);
  }

  update(jogo: IJogo): Observable<IJogo> {
    const url = `${this.baseUrl}/${jogo.id}`;
    return this.http.put<IJogo>(url, jogo);
  }

  delete(id: string | undefined):Observable<IJogo> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<IJogo>(url);
  }
}
