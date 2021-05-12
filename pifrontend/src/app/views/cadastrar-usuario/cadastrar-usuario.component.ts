import { Component, OnInit } from '@angular/core';
import { CadastroUsuario } from './cadastro-usuario.model';
import { CadastroUsuarioService } from './cadastro-usuario.service'

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  constructor(private cadastroUsuarioService: CadastroUsuarioService) { }

  cadastroUsuario: CadastroUsuario = {
    nome: '',
    email: '',
    senha: '',
    usuario: '',
    cpf: ''
    }
    
    ngOnInit(): void {
    }

    saveCadastroUsuario(): void {
      const data = {
        nome: this.cadastroUsuario.nome,
        email: this.cadastroUsuario.email,
        senha: this.cadastroUsuario.senha,
        usuario: this.cadastroUsuario.usuario,
        cpf: this.cadastroUsuario.cpf
      }

      this.cadastroUsuarioService.create(data).subscribe(
        (error : any) => {
          console.log(error);
        }
      )
    }

}
