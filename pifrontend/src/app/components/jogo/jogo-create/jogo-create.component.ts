import { Component, OnInit } from '@angular/core';
import { JogoService } from '../jogo.service';
import { Router } from '@angular/router';
import { IJogo } from '../../../models/IJogo';

@Component({
  selector: 'app-jogo-create',
  templateUrl: './jogo-create.component.html',
  styleUrls: ['./jogo-create.component.css'],
})
export class JogoCreateComponent implements OnInit {
  constructor(private jogoService: JogoService, private router: Router) {}

  jogo = {
    nome: '',
    preco: 0,
    descricao: '',
    genero: '',
    espaco_arm: 0,
    status: false,
  }

  file: any;

  ngOnInit(): void {

  }

  onChange(event: any){
    const file: any = event.target.files[0];
    this.file = file;
  }

  create(){
    const formData = new FormData()

    formData.append("nome", this.jogo.nome);
    formData.append("preco", String(this.jogo.preco));
    formData.append("descricao", this.jogo.descricao);
    formData.append("genero", this.jogo.genero);
    formData.append("espaco_arm", String(this.jogo.espaco_arm));
    formData.append("status", String(this.jogo.status));
    formData.append("file", this.file, this.file.name);

    this.jogoService.create(formData).subscribe(() => {
      this.jogoService.showMessage("Jogo cadastrado com sucesso.")
      this.router.navigate(['./home'])
    });
  }
}
