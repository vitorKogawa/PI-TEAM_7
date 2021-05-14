import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ILogin } from 'src/app/models/ILogin';

@Component({
  selector: 'app-jogo-crud',
  templateUrl: './jogo-crud.component.html',
  styleUrls: ['./jogo-crud.component.css']
})
export class JogoCrudComponent implements OnInit {

  constructor(private router: Router) { }

  status_adm: boolean = false;

  ngOnInit(): void {
    const json = JSON.parse(String(sessionStorage.getItem('token'))) as ILogin;
    this.status_adm = json.user.status_adm;
  }

  navigateToJogoCreate(): void {
    this.router.navigate(['/jogos/create'])
  }

}
