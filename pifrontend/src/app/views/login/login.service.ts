import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ILogin } from 'src/app/models/ILogin';
import { IUsuario } from '../../models/IUsuario';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private router: Router) {}

  submit(credentials: IUsuario): Observable<ILogin> {
    return this.http.post<ILogin>('http://127.0.0.1:3333/login', credentials);
  }

  signin(): void {
    sessionStorage.removeItem("token");
    this.router.navigate(['/login']);
  }
}
