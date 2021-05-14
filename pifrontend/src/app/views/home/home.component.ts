import { Component, OnInit } from '@angular/core';
import { ILogin } from 'src/app/models/ILogin';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loginService: LoginService) {
  }

  status_adm: boolean = false;

  ngOnInit(): void {
    const json = JSON.parse(String(sessionStorage.getItem('token'))) as ILogin;
    this.status_adm = json.user.status_adm
  }

  logout(): void {
    this.loginService.logout()
  }
}
