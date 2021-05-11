import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  numeros: number[] = [1,2,4,5]

  ngOnInit(): void {
  }

  status_adm: boolean = false;
}
