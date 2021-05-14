import { Component, OnInit } from '@angular/core';
import { JogoService } from 'src/app/components/jogo/jogo.service';
import { ILogin } from 'src/app/models/ILogin';
import { IUsuario } from 'src/app/models/IUsuario';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-all-usuarios',
  templateUrl: './all-usuarios.component.html',
  styleUrls: ['./all-usuarios.component.css'],
})
export class AllUsuariosComponent implements OnInit {
  constructor(private usuarioService: UsuariosService, private jogoService: JogoService) {}

  usuarios: Array<IUsuario> = [];

  displayedColumns = ['id', 'nome', 'email', 'cpf', 'ativo', 'action'];

  status_adm: boolean = false;
  ativo: boolean = false;

  ngOnInit(): void {
    this.findAll();

    const json = JSON.parse(String(sessionStorage.getItem('token'))) as ILogin;
    this.status_adm = json.user.status_adm;
    this.ativo = json.user.ativo;
  }

  findAll(): void {
    this.usuarioService
      .findAll()
      .subscribe((usuarios) => (this.usuarios = usuarios));
  }

  disableById(userId: number): void {
    this.usuarioService.disableByID(userId).subscribe(() => this.jogoService.showMessage('Usuário desabilitado com sucesso!'))
    window.location.reload();
  }
}
