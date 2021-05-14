import { HttpClient, HttpRequest } from '@angular/common/http';
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
    this.snackBar.open(msg, 'OK', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['msg-sucess']
    });
  }
  create(jogo: any): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl, jogo);
  }

  read(): Observable<IJogo[]> {
    return this.http.get<IJogo[]>(this.baseUrl);
  }

  readEnable(): Observable<IJogo[]> {
    return this.http.get<IJogo[]>(`${this.baseUrl}/enable`);
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
    const url = `${this.baseUrl}/disable/${id}`
    return this.http.put<IJogo>(url, {});
  }

  upload(files: Set<File>, url: string){
    const formData = new FormData();
    files.forEach(file => formData.append('file', file, file.name))
    const request = new HttpRequest('POST', url, formData);
    return this.http.request(request)

  }
}
