import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel-teste',
  templateUrl: './carrousel-teste.component.html',
  styleUrls: ['./carrousel-teste.component.css']
})
export class CarrouselTesteComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
