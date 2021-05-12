import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../../models/IUsuario';
import { CadastroUsuarioService } from './cadastro-usuario.service'

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  constructor(private cadastroUsuarioService: CadastroUsuarioService) { }

  cadastroUsuario: IUsuario = {
    nome: '',
    email: '',
    senha: '',
    usuario: '',
    cpf: ''
    }

    ngOnInit(): void {
    }

    saveCadastroUsuario(): void {

      this.senhasIguais = this.ValidarSenha();
      console.log(this.senhasIguais)

      if(this.senhasIguais){
        const data = {
          nome: this.cadastroUsuario.nome,
          email: this.cadastroUsuario.email,
          senha: this.cadastroUsuario.senha,
          usuario: this.cadastroUsuario.usuario,
          cpf: this.cadastroUsuario.cpf
        }

        this.cadastroUsuarioService.create(data).subscribe(
          () => {
            window.location.href = '/login';
          },
          (error : any) => {
            console.log(error);
          }
        )
      }
    }

    ValidarSenha(): boolean {
      return this.cadastroUsuario.senha === this.cadastroUsuario.confirmarSenha? true : false
    }

}
