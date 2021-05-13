import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IJogo } from '../jogo.model';
import { JogoService } from '../jogo.service';


@Component({
  selector: 'app-jogo-delete',
  templateUrl: './jogo-delete.component.html',
  styleUrls: ['./jogo-delete.component.css']
})
export class JogoDeleteComponent implements OnInit {

  jogo: IJogo = {
    nome: '',
    preco: 0,
  }

  constructor(private jogoService: JogoService,
    private router: Router,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    const id : string | null  = this.route.snapshot.paramMap.get('id');
    this.jogoService.readById(id).subscribe(jogo =>{
      this.jogo = jogo
    })
  }


  deleteJogo(): void {
    this.jogoService.delete(this.jogo.id).subscribe(() =>{
      this.jogoService.showMessage('Produto excluido com sucesso')
      this.router.navigate(['/jogos'])
    })
  }

  cancel(): void{
    this.router.navigate(['/jogos'])
  }

}
