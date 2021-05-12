import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { IUsuario } from 'src/app/models/IUsuario';
import { ILogin } from 'src/app/models/ILogin';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}
  credentials: IUsuario = {
    email: '',
    senha: '',
  };

  token: ILogin = {
    user: {
      id: 0,
      ativo: false,
      status_adm: false,
    },
    token: '',
  };

  ngOnInit(): void {}

  login(): void {
    this.loginService.submit(this.credentials).subscribe((token) => {
      this.token = token,
      sessionStorage.setItem('token', JSON.stringify(token)),
      this.router.navigate(['/home'])
    });
  }
}
