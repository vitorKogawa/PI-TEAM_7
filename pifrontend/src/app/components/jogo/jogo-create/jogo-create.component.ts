import { Component, OnInit} from '@angular/core';
import { JogoService } from '../jogo.service';
import { Router } from '@angular/router';
import { IJogo } from '../../../models/IJogo';
import { HttpClient } from '@angular/common/http';

// import Swal from 'sweetalert2'

@Component({
  selector: 'app-jogo-create',
  templateUrl: './jogo-create.component.html',
  styleUrls: ['./jogo-create.component.css'],
})
export class JogoCreateComponent implements OnInit {
  jogo: IJogo = {
    id: '',
    nome: '',
    preco: 0,
    descricao: '',
    espaco_arm: 0,
    genero: '',
    status: true,
    imageUrl: '',
  };

  files: File | undefined

  constructor(private jogoService: JogoService, private router: Router, private http: HttpClient) {
  }

  ngOnInit(): void {}

  OnChange(event: any){  
    const selectElements = <FileList>event.srcElement.files;   
    const FileNames = [];
    this.files = new Set();

    for (let i = 0; i < selectElements.length; i++){
      FileNames.push(selectElements[i].name)
      this.files.add(selectElements[i]);
    }
  }

  onUpload() {
    //if (this.files && this.files.size > 0){
      //this.jogoService.upload(this.files,'') .subscribe
      //(response => console.log('Upload Concluído'));
    //}
    console.log(this.files)
  }

  createJogo(): void {
    const fd = new FormData();
    fd.set("name", this.jogo.nome)
    fd.set("preco", this.jogo.preco)
    fd.set("descricao", this.jogo.descricao)
    fd.set("espaco_arm",this.jogo.espaco_arm)
    fd.set("genero",this.jogo.genero)
    fd.set("status",this.jogo.status)
    fd.append("file",this.files.slice(),file.name)

    this.jogoService.create(this.jogo).subscribe(() => {
      this.jogoService.showMessage('Jogo cadastrado com sucesso!');
      this.router.navigate(['/jogos']);
    });
  }
  cancel(): void {
    this.router.navigate(['/jogos']);
  }
}
