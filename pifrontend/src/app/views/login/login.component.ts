import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  // form: FormGroup;
  email: string = ''
  senha: string = ''
  token: string = ''
  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  ngOnInit(): void { }

  submit(): Observable<{ token: string }> {
    return this.http.post<{ token: string }>('http://127.0.0.1:3333/login', { this.email, this.senha })
  }
  login(): void {
    this.submit().subscribe(token => {
      console.log(token),
        this.token = token
    })
  }
}
