import { Component, OnInit } from '@angular/core';
import { LoginAdmService } from './login-adm.service';
import { IUsuario } from 'src/app/models/IUsuario';
import { ILogin } from 'src/app/models/ILogin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-adm',
  templateUrl: './login-adm.component.html',
  styleUrls: ['./login-adm.component.css']
})
export class LoginAdmComponent implements OnInit {

  constructor(private loginAdmService: LoginAdmService, private router: Router) {}
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
    this.loginAdmService.submit(this.credentials).subscribe((token) => {
      if (token) {
        (this.token = token),
          sessionStorage.setItem('token', JSON.stringify(token)),
          this.router.navigate(['/loginAdm']);
      } else {
        this.router.navigate(['/jogos']);
      }
    });

    this.loginAdmService.submit(this.credentials);
  }
}
