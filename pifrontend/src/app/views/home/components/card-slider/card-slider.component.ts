import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.css']
})
export class CardSliderComponent implements OnInit {

  constructor() { }

  games: Array<{ title: string, subtitle: string, imageUrl: string }> = [
    {
      title: 'Game 1',
      subtitle: 'Subtitle game 1',
      imageUrl: 'https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png'
    },
    {
      title: 'Game 1',
      subtitle: 'Subtitle game 1',
      imageUrl: 'https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png'
    },
    {
      title: 'Game 1',
      subtitle: 'Subtitle game 1',
      imageUrl: 'https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png'
    },
    {
      title: 'Game 1',
      subtitle: 'Subtitle game 1',
      imageUrl: 'https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png'
    },
    {
      title: 'Game 1',
      subtitle: 'Subtitle game 1',
      imageUrl: 'https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png'
    },
    {
      title: 'Game 1',
      subtitle: 'Subtitle game 1',
      imageUrl: 'https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png'
    }
  ]

  ngOnInit(): void {
  }

}
