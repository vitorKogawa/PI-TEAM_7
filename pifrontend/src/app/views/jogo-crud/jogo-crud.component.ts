import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-jogo-crud',
  templateUrl: './jogo-crud.component.html',
  styleUrls: ['./jogo-crud.component.css']
})
export class JogoCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToJogoCreate(): void {
    this.router.navigate(['/jogos/create'])
  }

}
