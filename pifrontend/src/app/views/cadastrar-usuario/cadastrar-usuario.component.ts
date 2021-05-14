import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JogoService } from 'src/app/components/jogo/jogo.service';
import { IUsuario } from '../../models/IUsuario';
import { CadastroUsuarioService } from './cadastro-usuario.service';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css'],
})
export class CadastrarUsuarioComponent implements OnInit {
  constructor(private cadastroUsuarioService: CadastroUsuarioService, private router: Router, private jogoService: JogoService) {}

  cadastroUsuario: IUsuario = {
    nome: '',
    email: '',
    senha: '',
    usuario: '',
    cpf: '',
  };

  confirmarSenha: string = '';
  senhasIguais: boolean = true;

  ngOnInit(): void {}

  saveCadastroUsuario(): void {
    this.senhasIguais = this.ValidarSenha();
    console.log(this.senhasIguais);

    if (this.senhasIguais) {
      const data = {
        nome: this.cadastroUsuario.nome,
        email: this.cadastroUsuario.email,
        senha: this.cadastroUsuario.senha,
        usuario: this.cadastroUsuario.usuario,
        cpf: this.cadastroUsuario.cpf,
      };

      this.cadastroUsuarioService.create(data).subscribe(
        () => {
          this.jogoService.showMessage('Usuário cadastrado com sucesso!')
          this.router.navigate(['/login'])
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }

  ValidarSenha(): boolean {
    return this.cadastroUsuario.senha === this.confirmarSenha ? true : false;
  }
}
